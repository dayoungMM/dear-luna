import { Button } from "app/common/components/ui/button";
import { Input } from "app/common/components/ui/input";
import { Textarea } from "app/common/components/ui/textarea";
import type { MetaFunction } from "react-router";

// loader
export function loader() {
  // 필요한 초기 데이터가 있다면 여기에 작성
  return {};
}

// action
export function action() {
  // 폼 제출 처리 로직 작성
  return {};
}

// meta
export const meta: MetaFunction = () => ([
  {
    title: "편지 작성하기 | Dear Luna",
    description: "Dear Luna에서 새로운 편지를 작성하세요.",
  },
]);

// 컴포넌트
export function WriteLetterPage({ loaderData, actionData }: any) {
  return (
    <div className="max-w-lg mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">편지 작성하기</h1>
      <form method="post" className="space-y-4">
        <Input name="title" placeholder="제목을 입력하세요" required />
        <Textarea name="content" placeholder="내용을 입력하세요" rows={8} required />
        <Button type="submit" className="w-full">작성 완료</Button>
      </form>
    </div>
  );
}

// named export
export { WriteLetterPage as default }; 