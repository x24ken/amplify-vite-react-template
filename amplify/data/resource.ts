import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== ステップ 1 ===============================================================
以下のセクションでは、"content"フィールドを持つTodoデータベーステーブルを作成します。
新しい"isDone"フィールドをブーリアン型で追加してみてください。以下の認可ルールは、
APIキーで認証されたユーザーが"Todo"レコードの"作成"、"読み取り"、"更新"、"削除"を
行えることを指定しています。
=========================================================================*/
const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== ステップ 2 ===============================================================
フロントエンドのソースコードに移動します。クライアント側のコードから、テーブルに
CRUDLリクエストを行うためのDataクライアントを生成します。（このスニペットは
フロントエンドのコードファイルでのみ動作します。）

JavaScriptまたはNext.jsのReactサーバーコンポーネント、ミドルウェア、サーバーアクション、
ページルーターを使用していますか？これらのユースケースでのDataクライアントの生成方法を
確認してください：https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // このDataクライアントをCRUDLリクエストに使用します
*/

/*== ステップ 3 ===============================================================
データベースからレコードを取得し、フロントエンドコンポーネントで使用します。
（このスニペットはフロントエンドのコードファイルでのみ動作します。）
=========================================================================*/

/* 例えば、Reactコンポーネントでは、関数のRETURN文でこのスニペットを使用できます */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
