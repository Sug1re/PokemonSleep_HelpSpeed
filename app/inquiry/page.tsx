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
import React from "react";

const inquiry = () => {
  return (
    <main className=" pt-20">
      <div className=" p-4 container">
        <Card className=" rounded ">
          <CardHeader>
            <CardTitle className=" text-center text-gray-900">
              お問い合わせフォーム
            </CardTitle>
            <CardDescription className=" px-6 py-2">
              このお問い合わせフォームでは、当社へのご質問やご要望をお送りいただけます。お客様のご意見やフィードバックは、当社のサービス向上にとって非常に重要です。フォームに必要事項を入力し、送信ボタンを押してください。お問い合わせへの返信には通常2〜3営業日かかる場合がございます。
            </CardDescription>
          </CardHeader>
          <CardContent className=" space-y-4">
            <div>
              <Label htmlFor="name" className=" text-lg text-gray-900">
                お名前
              </Label>
              <Input
                className=" border-blue-700 rounded"
                type=" text"
                id="name"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className=" text-lg text-gray-900">
                メールアドレス
              </Label>
              <Input
                className=" border-blue-700 rounded"
                type=" email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="message" className=" text-lg text-gray-900">
                メッセージ
              </Label>
              <textarea
                className="rounded bg-gray-200 border border-blue-700 focus:outline-none
                 "
                id="message"
                name="message"
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
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default inquiry;
