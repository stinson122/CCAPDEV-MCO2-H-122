import SubtopicTable from './SubtopicTable'
import TopicHeader from './TopicHeader'
import { Topic } from './topics.types'

export default function TopicBox({topic}:{topic: Topic}) {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <div className="overflow-x-auto flex-col">
        <TopicHeader topicName={topic.name} />
        <SubtopicTable subtopics={topic.subtopics}/>
      </div>
    </div>
    
  )
}
/*
<table>
(stuff here such as headers etc.)
subtopics.map((subtopic) => (
   <SubtopicRow subtopic={subtopic} /> (td object ito)
))
</table>
// definition ng subtopic row
*/