import{
  Document,
} from 'appwrite-models';

interface Photo extends Document {
  userId: string;
  fileId: string;
  name: string;
  description: string | null;
}

export default Photo;