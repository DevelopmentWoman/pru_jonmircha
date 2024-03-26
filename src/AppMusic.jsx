import { useEffect, useState } from "react"
import { FormMusic } from "./componentes/Songs/components/FormMusic";
import { DetailSong } from "./componentes/Songs/components/DetailSong";
import { Loader } from "./crudapi/componentes/Loader";


export const AppMusic = () => {

    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {

    }, [search])
    


    const onSearch = (data)=>{
        // const {lyric, bio} = data;
        // setLyric(lyric);
        // setBio(bio);
        setSearch(data)
    }





  return (
    <>
        <FormMusic onSearch={onSearch} />
        <DetailSong lyric={lyric} bio={bio}/>
        {isLoading && <Loader/>}
    </>
  )
}

