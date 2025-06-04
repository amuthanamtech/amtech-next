'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// AdminUser type
interface AdminUser {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
}

export default function TestingPage() {
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

          // Optional: add type validation
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
          console.error('Failed to parse admin user:', err);
          localStorage.removeItem('adminUser');
          router.replace('/admin');
        }
      } else {
        // No admin user in localStorage
        router.replace('/admin');
      }

      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) return <p>Loading...</p>;

  if (!adminUser) return null; // Optional: show nothing while redirecting

  return (
    <div style={{ padding: 20 }}>
      <h1>Testing Page</h1>
      <p>Welcome, <strong>{adminUser.name}</strong> ({adminUser.role})</p>
    </div>
  );
}
