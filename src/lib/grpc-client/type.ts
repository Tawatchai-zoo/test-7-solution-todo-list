import * as grpc from "@grpc/grpc-js";

export type ProtoUserPackage = {
  UserService: grpc.ServiceClientConstructor;
}

export type ProtoDescriptor = {
  user: ProtoUserPackage;
}
