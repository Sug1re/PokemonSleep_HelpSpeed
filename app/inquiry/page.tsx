import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

const Inquiry = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await res.json();
    if (result.success) {
      setStatus("お問い合わせを送信しました！");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("送信に失敗しました。再度お試しください。");
    }
  };

  return (
    <main className=" pt-20">
      <div className=" p-4 container">
        <form onSubmit={handleSubmit}>
          <Card className=" rounded ">
            <CardHeader>
              <CardTitle className=" text-center text-gray-900">
                お問い合わせフォーム
              </CardTitle>
              <CardDescription className=" px-6 py-2">
                このお問い合わせフォームでは、サイトへのご質問やご要望をお送りいただけます。
              </CardDescription>
            </CardHeader>
            <CardContent className=" space-y-4">
              <div>
                <Label htmlFor="name" className=" text-lg text-gray-900">
                  お名前
                </Label>
                <Input
                  className=" border-blue-700 rounded"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className=" text-lg text-gray-900">
                  メールアドレス
                </Label>
                <Input
                  className=" border-blue-700 rounded"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="message" className=" text-lg text-gray-900">
                  メッセージ
                </Label>
                <textarea
                  className="rounded bg-gray-200 border border-blue-700 focus:outline-none"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className=" bg-blue-700 rounded text-gray-200 hover:bg-blue-800 hover:scale-90 duration-300"
              >
                メール送信
              </Button>
              {status && <p className=" text-gray-900 mt-2">{status}</p>}
            </CardFooter>
          </Card>
        </form>
      </div>
    </main>
  );
};

export default Inquiry;
