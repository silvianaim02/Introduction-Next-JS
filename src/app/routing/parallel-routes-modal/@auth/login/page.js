'use client';
import { useRouter } from 'next/navigation';
import Modal from '@/components/modal';

export default async function Login() {
  const router = useRouter();
  return (
    <Modal>
      <span className="bg-blue-600" onClick={() => router.back()}>
        Close modal
      </span>
      <h1>Login</h1>
      ...
    </Modal>
  );
}
