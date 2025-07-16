import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function LoginPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center">
            <Image
                src="/assets/logo.svg"
                width={100}
                height={100}
                alt="Logo"
            />
            <div className="mt-3">
                <SignIn />
            </div>
        </main>
    );
}
