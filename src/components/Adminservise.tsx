import Link from "next/link";

export default function AdminService() {
  return (
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
        <h1 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#111827',
          textAlign: 'center',
          marginBottom: '24px'
        }}>
          Admin Service Dashboard
        </h1>
        <Link href='/admin/testing'></Link>

        <p style={{
          textAlign: 'center',
          color: '#6b7280',
          fontSize: '16px'
        }}>
          Welcome  to the Admin Service Panel!
        </p>
      </div>
    </div>
  );
}