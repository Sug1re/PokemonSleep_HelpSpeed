import Head from "next/head";

type Props = {
  title: string;
  description: string;
  url: string;
  type: string;
  imageUrl: string;
};

const CommonMeta = (props: Props) => {
  const { title, description, url, type, imageUrl } = props;
  return (
    <Head>
      <title>{"おてスピ計算サイト"}</title>
      <meta
        name="description"
        content={
          "ポケモンスリープのおてつだい時間を計算するサイトです。今後実装されるであろうLv100まで対応しているのでぜひ一足先にLv100のおてつだい時間をチェックしてみてください。"
        }
      />
      <meta
        name="google-adsense-account"
        content="ca-pub-5584222931737430"
      ></meta>
      <meta
        name="keywords"
        content="ポケモンスリープ,ポケスリ,おてスピ,おてつだいスピード,おてつだい時間,おてつだい時間計算"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:title" content={"おてスピ計算サイト"} />
      <meta
        property="og:description"
        content={
          "ポケモンスリープのおてつだい時間を計算するサイトです。lv100まで計算可能なので将来のおてスピをその目で確かめてみませんか？"
        }
      />
      <meta property="og:url" content={"https://otesupi.com/"} />
      <meta property="og:type" content={"websites"} />
      <meta property="og:image" content={"favicon.bg"} />
    </Head>
  );
};
export default CommonMeta;
