import { rpc } from "../../src/index";

let client: rpc.RPCClient;
beforeAll(async () => {
  client = new rpc.RPCClient("http://localhost:30333");
});

describe("privnet", () => {
  test("getBlockCount", async () => {
    const result = await client.getBlockCount();
    expect(typeof result === "number").toBeTruthy();
  });
});
