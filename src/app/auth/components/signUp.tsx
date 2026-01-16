import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";

export default function SignUp() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sign Up for your account</CardTitle>
        <CardDescription>
          Enter your details below to create a new account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-2">
            <div className="grid gap-2">
              <Label htmlFor="email">Full Name</Label>
              <Input
                id="fullname"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="repeat-password">Repeat Password</Label>
              <Input
                id="repeat-password"
                type="password"
                placeholder="Enter your password again"
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
        <Button variant="outline" className="w-full">
          Sign up with Google
        </Button>
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth?tab=login"
            className="text-green-600 hover:text-green-700 font-semibold"
          >
            Log in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
