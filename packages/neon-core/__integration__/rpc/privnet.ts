import { rpc } from "../../src/index";

let client: rpc.RPCClient;
beforeAll(async () => {
  client = new rpc.RPCClient("http://localhost:20333");
});

describe("privnet", async () => {
  test("getBlockCount", async () => {
    const result = await client.getBlockCount();
    expect(typeof result === "number").toBeTruthy();
  });
});
