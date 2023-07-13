import{
  Document,
} from 'appwrite-models';

interface Photo extends Document {
  userId: string;
  fileId: string;
  username: string;
  name: string;
  slug: string;
  isPrivate: boolean;
  description: string | null;
}

export default Photo;