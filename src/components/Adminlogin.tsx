'use client';

import Link from 'next/link';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/firebase/auth';
import { useRouter } from 'next/navigation';


// Define the Admin User type
interface AdminUser {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
}

// Mock database of registered admin users
const REGISTERED_ADMINS: AdminUser[] = [
  {
    id: 1,
    email: 'prakash@gmail.com',
    password: '123456789',
    name: 'Prakash',
    role: 'Super Admin'
  },
  {
    id: 2,
    email: 'poothishvaran@gmail.com',
    password: '123456789',
    name: 'Manager',
    role: 'Manager'
  },
];

export default function Adminloginpage() {

  const router = useRouter();


  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showAdminService, setShowAdminService] = useState(false);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const verifyAdminUser = (email: string, password: string): AdminUser | null => {
    // Check if user exists in registered admins
    const user = REGISTERED_ADMINS.find(
      admin => admin.email === email && admin.password === password
    );
    return user || null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      // Match with local admin metadata
      const matchedAdmin = REGISTERED_ADMINS.find(admin => admin.email === user.email);

      if (matchedAdmin) {
        setCurrentUser(matchedAdmin);
        localStorage.setItem('adminUser', JSON.stringify(matchedAdmin)); // <- This line
        setShowAdminService(true);
      }

      else {
        setError('You are  authenticated but  not registered as an admin.');
      }

    } catch (err: any) {
      if (err.code === 'auth/user-not-found') {
        setError('No user found with this email.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Incorrect password.');
      } else {
        setError('Login  failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Admin Service Component
  const AdminServiceComponent = () => (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        padding: '32px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px'
        }}>
          <div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#111827'
            }}>
              Admin Service Dashboard
            </h1>
            {currentUser && (
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                marginTop: '4px'
              }}>
                Welcome back, {currentUser.name} ({currentUser.role})
              </p>
            )}


            <button
              onClick={() => {
                if (currentUser) {
                  router.push('/admin/userdata');
                } else {
                  alert('Please login to access this page.');
                  router.push('/admin');
                }
              }}
              style={{
                padding: '8px 16px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#2563eb';
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#3b82f6';
              }}
            >
              resume data
            </button>




          </div>
          <button
            onClick={() => {
              localStorage.removeItem('adminUser');
              setShowAdminService(false);
              setCurrentUser(null);
              setFormData({ email: '', password: '' });
            }}
            style={{
              padding: '8px 16px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Logout
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          <div style={{
            backgroundColor: '#f9fafb',
            padding: '24px',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '12px'
            }}>
              User Information
            </h3>
            {currentUser && (
              <div style={{ fontSize: '14px', color: '#6b7280' }}>
                <p><strong>Name:</strong> {currentUser.name}</p>
                <p><strong>Email:</strong> {currentUser.email}</p>
                <p><strong>Role:</strong> {currentUser.role}</p>
                <p><strong>User ID:</strong> {currentUser.id}</p>
              </div>
            )}
          </div>

          <div style={{
            backgroundColor: '#f0f9ff',
            padding: '24px',
            borderRadius: '8px',
            border: '1px solid #bae6fd'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#0369a1',
              marginBottom: '12px'
            }}>
              System Status
            </h3>
            <p style={{
              color: '#0284c7',
              fontSize: '14px'
            }}>
              All systems are running normally.
            </p>
          </div>

          <div style={{
            backgroundColor: '#f0fdf4',
            padding: '24px',
            borderRadius: '8px',
            border: '1px solid #bbf7d0'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#166534',
              marginBottom: '12px'
            }}>
              Access Level
            </h3>
            <p style={{
              color: '#15803d',
              fontSize: '14px'
            }}>
              {currentUser?.role === 'Super Admin' ? 'Full Access Granted' :
                currentUser?.role === 'Admin' ? 'Admin Access Granted' :
                  'Limited Access Granted'}
            </p>
          </div>
        </div>

        {/* Registered Users List */}
        <div style={{
          marginTop: '32px',
          backgroundColor: '#fafafa',
          padding: '24px',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#374151',
            marginBottom: '16px'
          }}>
            Registered Admin Users
          </h3>
          <div style={{ display: 'grid', gap: '12px' }}>
            {REGISTERED_ADMINS.map((admin: AdminUser) => (
              <div key={admin.id} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px',
                backgroundColor: admin.id === currentUser?.id ? '#dbeafe' : 'white',
                borderRadius: '6px',
                border: '1px solid #e5e7eb'
              }}>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                    {admin.name}
                  </p>
                  <p style={{ fontSize: '12px', color: '#6b7280' }}>
                    {admin.email}
                  </p>
                </div>
                <span style={{
                  fontSize: '12px',
                  padding: '4px 8px',
                  backgroundColor: admin.role === 'Super Admin' ? '#fef3c7' :
                    admin.role === 'Admin' ? '#dbeafe' : '#d1fae5',
                  color: admin.role === 'Super Admin' ? '#92400e' :
                    admin.role === 'Admin' ? '#1e40af' : '#166534',
                  borderRadius: '4px'
                }}>
                  {admin.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (showAdminService) {
    return <AdminServiceComponent />;
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 16px',
      backgroundImage: 'url("/your-image-name.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div style={{
        maxWidth: '400px',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: '32px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '8px'
          }}>
            Admin Login
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#6b7280'
          }}>
            Sign in to your admin account
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '4px'
            }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              placeholder="Enter your email"
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '4px'
            }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <div style={{
              color: '#dc2626',
              fontSize: '14px',
              textAlign: 'center',
              marginBottom: '16px',
              padding: '8px',
              backgroundColor: '#fef2f2',
              border: '1px solid #fecaca',
              borderRadius: '4px'
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: isLoading ? '#9ca3af' : '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = '#2563eb';
              }
            }}
            onMouseOut={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = '#3b82f6';
              }
            }}
          >
            {isLoading ? 'Verifying...' : 'Sign In'}
          </button>
        </form>

        {/* Show registered users for demo */}
        <div style={{
          marginTop: '24px',
          padding: '16px',
          backgroundColor: '#f9fafb',
          borderRadius: '6px',
          fontSize: '12px'
        }}>


        </div>
      </div>
    </div>
  );
}