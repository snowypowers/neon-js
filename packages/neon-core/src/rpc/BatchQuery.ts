import { Query } from "./Query";

export class BatchQuery<
  TParams extends unknown[],
  TResponses extends unknown[]
> {
  public queries: Query<unknown[], unknown>[];

  private constructor(q: Query<TParams, TResponses>) {
    this.queries = [q];
  }

  public add<TParam extends unknown[], TResponse>(
    q: Query<TParam, TResponse>
  ): BatchQuery<[...TParams, TParam], [...TResponses, TResponse]> {
    this.queries.push(q);
    return this;
  }

  public static of<TParams extends unknown[], TResponse>(
    q: Query<TParams, TResponse>
  ): BatchQuery<[TParams], [TResponse]> {
    return new BatchQuery(q);
  }
}
