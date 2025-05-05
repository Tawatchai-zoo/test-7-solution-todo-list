import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { fileURLToPath } from "url";
import path from "path";
import { ProtoDescriptor } from "./type";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROTO_PATH = path.resolve(__dirname, "user.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

// Load proto with proper type casting
const protoDescriptor = grpc.loadPackageDefinition(
  packageDefinition
) as ProtoDescriptor;

// Now TypeScript understands the structure
const UserServiceClient = protoDescriptor.user.UserService;

// Create the client instance
export const userClient = new UserServiceClient(
  process.env.NEXT_PUBLIC_GRPC_URL ?? 'localhost:5000',
  grpc.credentials.createInsecure()
);
