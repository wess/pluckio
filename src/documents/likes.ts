import{
  Document,
} from 'appwrite-models';

interface Like extends Document {
  userId: string;
  photoId: string;
}

export default Like;