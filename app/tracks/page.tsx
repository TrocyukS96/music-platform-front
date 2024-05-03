import { Flex, Heading } from '@radix-ui/themes';
import "@radix-ui/themes/styles.css";
import TrackList from '../components/trackList/TrackList';
import UploadTrack from '../components/uploadTrack/UploadTrack';

const Tracks = () => {
  return (
    <div>
      <Flex justify='between' align={'center'}>
          <Heading>Треки</Heading>
          <UploadTrack/>
      </Flex>
      <TrackList/>
    </div>
  )
}

export default Tracks;