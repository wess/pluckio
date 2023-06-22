import{
  Document,
} from 'appwrite-models';

interface Like extends Document {
  userId: string;
  fileId: string;
}

export default Like;