'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import MessageTable from '@/components/MessageTable'; // Your actual message table component

// Define AdminUser type
interface AdminUser {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
}

export default function MessageTablePage() {
  const router = useRouter();
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Delay access until client-side hydration is done
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('adminUser');

      if (storedUser) {
        try {
          const parsed = JSON.parse(storedUser);

          // Validate structure
          if (
            parsed &&
            typeof parsed.id === 'number' &&
            typeof parsed.email === 'string' &&
            typeof parsed.name === 'string' &&
            typeof parsed.role === 'string'
          ) {
            setAdminUser(parsed);
          } else {
            throw new Error('Invalid user structure');
          }

        } catch (err) {
          console.error('Failed  to parse admin user:', err);
          localStorage.removeItem('adminUser');
          router.replace('/admin'); // Redirect to login page
        }
      } else {
        // No admin user found
        router.replace('/admin');
      }

      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) return <p style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</p>;

  if (!adminUser) return null; // Show nothing while redirecting

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>
        Message Table
      </h1>
      <p style={{ marginBottom: '24px' }}>
        Welcome, <strong>{adminUser.name}</strong> ({adminUser.role})
      </p>

      {/* Your actual message table component here */}
      <MessageTable />

      {/* Example: Logout button */}
      <button
        onClick={() => {
          localStorage.removeItem('adminUser');
          router.replace('/admin');
        }}
        style={{
          marginTop: '24px',
          padding: '8px 16px',
          backgroundColor: '#ef4444',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </div>
  );
}
