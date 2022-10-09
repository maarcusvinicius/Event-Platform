import { useParams } from "react-router-dom";

import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Sidebar } from "../components/Sidebar";

type Params = {
  slug: string;
}

export function Event() {
  const { slug } = useParams<Params>()

  return (
    <div className="flex flex-col bg-blur bg-cover bg-no-repeat min-h-screen">
      <Header />

      <main className="flex flex-1">
        {slug
          ? <Video lessonSlug={slug} />
          : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  )
}