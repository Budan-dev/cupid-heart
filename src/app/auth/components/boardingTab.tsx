"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/src/components/ui/button";

import { Input } from "@/src/components/ui/input";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { LogIn } from "./logIn";
import SignUp from "./signUp";

export default function BoardingTab() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tab = searchParams.get("tab");

  const defaultTab = tab === "login" ? "log-in" : "sign-up";

  const handleTabChange = (value: string) => {
    const tabParam = value === "log-in" ? "login" : "signup";
    router.push(`/auth?tab=${tabParam}`);
  };

  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs value={defaultTab} onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
          <TabsTrigger value="log-in">Log in</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-up">
          <SignUp />
        </TabsContent>
        <TabsContent value="log-in">
          <LogIn />
        </TabsContent>
      </Tabs>
    </div>
  );
}
