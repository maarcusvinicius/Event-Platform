import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"

const GET_LESSIONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`
type Lesson = {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSIONS_QUERY)

  console.log(data)
  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
