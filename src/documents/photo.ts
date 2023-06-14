import{
  Document,
} from 'appwrite-models';

interface Photo extends Document {
  userId: string;
  fileId: string;
  name: string;
  isPrivate: boolean;
  description: string | null;
}

export default Photo;