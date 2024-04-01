import { useEffect, useState } from "react"
import { FormMusic } from "./componentes/Songs/components/FormMusic";
import { DetailSong } from "./componentes/Songs/components/DetailSong";
import { Loader } from "./crudapi/componentes/Loader";
import { helpHttp } from "./crudapi/helpers/helpHttp";


export const AppMusic = () => {

    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
      if (search===null) return; 

      const searchInfo = async()=>{
        const {artist, song} = search
        let urlArtist = `https://www.vagalume.com.br/${artist}/index.js`
        let urlSong = `https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501aa&art=${artist}&mus=${song}`
        setIsLoading(true)


        const [dataArtist, dataMusic] = await Promise.all([
          helpHttp().get(urlArtist),
          helpHttp().get(urlSong)
        ])
          // if
        console.log(dataArtist.artist.pic_small)
        setIsLoading(false)
      }


      searchInfo();

    }, [search])
    


    const onSearch = (data)=>{
        // const {lyric, bio} = data;
        // setLyric(lyric);
        // setBio(bio);
        setSearch(data)
    }





  return (
    <>
        <FormMusic onSearch={onSearch}/>
        <DetailSong lyric={lyric} bio={bio}/>
        {isLoading && <Loader/>}
    </>
  )
}

