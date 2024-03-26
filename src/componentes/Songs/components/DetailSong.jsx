import { Bio } from "./Bio"
import { Lyric } from "./Lyric"

export const DetailSong = ({lyric, bio}) => {


  return (
    <section>
        <Lyric lyric={lyric}/>
        <Bio bio={bio}/>
    </section>
  )
}


