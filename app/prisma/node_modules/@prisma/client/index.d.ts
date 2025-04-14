
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model customers
 * 
 */
export type customers = $Result.DefaultSelection<Prisma.$customersPayload>
/**
 * Model vendors
 * 
 */
export type vendors = $Result.DefaultSelection<Prisma.$vendorsPayload>
/**
 * Model voucher_logs
 * 
 */
export type voucher_logs = $Result.DefaultSelection<Prisma.$voucher_logsPayload>
/**
 * Model vouchers
 * 
 */
export type vouchers = $Result.DefaultSelection<Prisma.$vouchersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customers.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customers.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customers`: Exposes CRUD operations for the **customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.customersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendors`: Exposes CRUD operations for the **vendors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendors.findMany()
    * ```
    */
  get vendors(): Prisma.vendorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voucher_logs`: Exposes CRUD operations for the **voucher_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Voucher_logs
    * const voucher_logs = await prisma.voucher_logs.findMany()
    * ```
    */
  get voucher_logs(): Prisma.voucher_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vouchers`: Exposes CRUD operations for the **vouchers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vouchers
    * const vouchers = await prisma.vouchers.findMany()
    * ```
    */
  get vouchers(): Prisma.vouchersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    customers: 'customers',
    vendors: 'vendors',
    voucher_logs: 'voucher_logs',
    vouchers: 'vouchers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "customers" | "vendors" | "voucher_logs" | "vouchers"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      customers: {
        payload: Prisma.$customersPayload<ExtArgs>
        fields: Prisma.customersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findFirst: {
            args: Prisma.customersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findMany: {
            args: Prisma.customersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          create: {
            args: Prisma.customersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          createMany: {
            args: Prisma.customersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          delete: {
            args: Prisma.customersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          update: {
            args: Prisma.customersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          deleteMany: {
            args: Prisma.customersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          upsert: {
            args: Prisma.customersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.customersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.customersCountArgs<ExtArgs>
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      vendors: {
        payload: Prisma.$vendorsPayload<ExtArgs>
        fields: Prisma.vendorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vendorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vendorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload>
          }
          findFirst: {
            args: Prisma.vendorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vendorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload>
          }
          findMany: {
            args: Prisma.vendorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload>[]
          }
          create: {
            args: Prisma.vendorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload>
          }
          createMany: {
            args: Prisma.vendorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vendorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload>[]
          }
          delete: {
            args: Prisma.vendorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload>
          }
          update: {
            args: Prisma.vendorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload>
          }
          deleteMany: {
            args: Prisma.vendorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vendorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.vendorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload>[]
          }
          upsert: {
            args: Prisma.vendorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload>
          }
          aggregate: {
            args: Prisma.VendorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendors>
          }
          groupBy: {
            args: Prisma.vendorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.vendorsCountArgs<ExtArgs>
            result: $Utils.Optional<VendorsCountAggregateOutputType> | number
          }
        }
      }
      voucher_logs: {
        payload: Prisma.$voucher_logsPayload<ExtArgs>
        fields: Prisma.voucher_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.voucher_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voucher_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.voucher_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voucher_logsPayload>
          }
          findFirst: {
            args: Prisma.voucher_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voucher_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.voucher_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voucher_logsPayload>
          }
          findMany: {
            args: Prisma.voucher_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voucher_logsPayload>[]
          }
          create: {
            args: Prisma.voucher_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voucher_logsPayload>
          }
          createMany: {
            args: Prisma.voucher_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.voucher_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voucher_logsPayload>[]
          }
          delete: {
            args: Prisma.voucher_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voucher_logsPayload>
          }
          update: {
            args: Prisma.voucher_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voucher_logsPayload>
          }
          deleteMany: {
            args: Prisma.voucher_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.voucher_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.voucher_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voucher_logsPayload>[]
          }
          upsert: {
            args: Prisma.voucher_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voucher_logsPayload>
          }
          aggregate: {
            args: Prisma.Voucher_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoucher_logs>
          }
          groupBy: {
            args: Prisma.voucher_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Voucher_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.voucher_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Voucher_logsCountAggregateOutputType> | number
          }
        }
      }
      vouchers: {
        payload: Prisma.$vouchersPayload<ExtArgs>
        fields: Prisma.vouchersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vouchersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vouchersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>
          }
          findFirst: {
            args: Prisma.vouchersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vouchersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>
          }
          findMany: {
            args: Prisma.vouchersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>[]
          }
          create: {
            args: Prisma.vouchersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>
          }
          createMany: {
            args: Prisma.vouchersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vouchersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>[]
          }
          delete: {
            args: Prisma.vouchersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>
          }
          update: {
            args: Prisma.vouchersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>
          }
          deleteMany: {
            args: Prisma.vouchersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vouchersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.vouchersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>[]
          }
          upsert: {
            args: Prisma.vouchersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vouchersPayload>
          }
          aggregate: {
            args: Prisma.VouchersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVouchers>
          }
          groupBy: {
            args: Prisma.vouchersGroupByArgs<ExtArgs>
            result: $Utils.Optional<VouchersGroupByOutputType>[]
          }
          count: {
            args: Prisma.vouchersCountArgs<ExtArgs>
            result: $Utils.Optional<VouchersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    customers?: customersOmit
    vendors?: vendorsOmit
    voucher_logs?: voucher_logsOmit
    vouchers?: vouchersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomersCountOutputType
   */

  export type CustomersCountOutputType = {
    vouchers: number
  }

  export type CustomersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vouchers?: boolean | CustomersCountOutputTypeCountVouchersArgs
  }

  // Custom InputTypes
  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomersCountOutputType
     */
    select?: CustomersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountVouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vouchersWhereInput
  }


  /**
   * Count Type VendorsCountOutputType
   */

  export type VendorsCountOutputType = {
    vouchers: number
  }

  export type VendorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vouchers?: boolean | VendorsCountOutputTypeCountVouchersArgs
  }

  // Custom InputTypes
  /**
   * VendorsCountOutputType without action
   */
  export type VendorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorsCountOutputType
     */
    select?: VendorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorsCountOutputType without action
   */
  export type VendorsCountOutputTypeCountVouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vouchersWhereInput
  }


  /**
   * Count Type VouchersCountOutputType
   */

  export type VouchersCountOutputType = {
    voucher_logs: number
  }

  export type VouchersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voucher_logs?: boolean | VouchersCountOutputTypeCountVoucher_logsArgs
  }

  // Custom InputTypes
  /**
   * VouchersCountOutputType without action
   */
  export type VouchersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VouchersCountOutputType
     */
    select?: VouchersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VouchersCountOutputType without action
   */
  export type VouchersCountOutputTypeCountVoucher_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voucher_logsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersMinAggregateOutputType = {
    id: string | null
    phone_number: string | null
    created_at: Date | null
  }

  export type CustomersMaxAggregateOutputType = {
    id: string | null
    phone_number: string | null
    created_at: Date | null
  }

  export type CustomersCountAggregateOutputType = {
    id: number
    phone_number: number
    created_at: number
    _all: number
  }


  export type CustomersMinAggregateInputType = {
    id?: true
    phone_number?: true
    created_at?: true
  }

  export type CustomersMaxAggregateInputType = {
    id?: true
    phone_number?: true
    created_at?: true
  }

  export type CustomersCountAggregateInputType = {
    id?: true
    phone_number?: true
    created_at?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to aggregate.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type customersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
    orderBy?: customersOrderByWithAggregationInput | customersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    id: string
    phone_number: string
    created_at: Date | null
    _count: CustomersCountAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends customersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type customersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone_number?: boolean
    created_at?: boolean
    vouchers?: boolean | customers$vouchersArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone_number?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["customers"]>

  export type customersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone_number?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["customers"]>

  export type customersSelectScalar = {
    id?: boolean
    phone_number?: boolean
    created_at?: boolean
  }

  export type customersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone_number" | "created_at", ExtArgs["result"]["customers"]>
  export type customersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vouchers?: boolean | customers$vouchersArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type customersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $customersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customers"
    objects: {
      vouchers: Prisma.$vouchersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone_number: string
      created_at: Date | null
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }

  type customersGetPayload<S extends boolean | null | undefined | customersDefaultArgs> = $Result.GetResult<Prisma.$customersPayload, S>

  type customersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface customersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customers'], meta: { name: 'customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {customersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customersFindUniqueArgs>(args: SelectSubset<T, customersFindUniqueArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs>(args: SelectSubset<T, customersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customersFindFirstArgs>(args?: SelectSubset<T, customersFindFirstArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs>(args?: SelectSubset<T, customersFindFirstOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customersWithIdOnly = await prisma.customers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends customersFindManyArgs>(args?: SelectSubset<T, customersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customers.
     * @param {customersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
     */
    create<T extends customersCreateArgs>(args: SelectSubset<T, customersCreateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customersCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customersCreateManyArgs>(args?: SelectSubset<T, customersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customersCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customersWithIdOnly = await prisma.customers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customersCreateManyAndReturnArgs>(args?: SelectSubset<T, customersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customers.
     * @param {customersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
     */
    delete<T extends customersDeleteArgs>(args: SelectSubset<T, customersDeleteArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customers.
     * @param {customersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customersUpdateArgs>(args: SelectSubset<T, customersUpdateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customersDeleteManyArgs>(args?: SelectSubset<T, customersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customersUpdateManyArgs>(args: SelectSubset<T, customersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {customersUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customersWithIdOnly = await prisma.customers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends customersUpdateManyAndReturnArgs>(args: SelectSubset<T, customersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customers.
     * @param {customersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
     */
    upsert<T extends customersUpsertArgs>(args: SelectSubset<T, customersUpsertArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customersCountArgs>(
      args?: Subset<T, customersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends customersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customersGroupByArgs['orderBy'] }
        : { orderBy?: customersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, customersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customers model
   */
  readonly fields: customersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vouchers<T extends customers$vouchersArgs<ExtArgs> = {}>(args?: Subset<T, customers$vouchersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the customers model
   */
  interface customersFieldRefs {
    readonly id: FieldRef<"customers", 'String'>
    readonly phone_number: FieldRef<"customers", 'String'>
    readonly created_at: FieldRef<"customers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * customers findUnique
   */
  export type customersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findUniqueOrThrow
   */
  export type customersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findFirst
   */
  export type customersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findFirstOrThrow
   */
  export type customersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findMany
   */
  export type customersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers create
   */
  export type customersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to create a customers.
     */
    data: XOR<customersCreateInput, customersUncheckedCreateInput>
  }

  /**
   * customers createMany
   */
  export type customersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers createManyAndReturn
   */
  export type customersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers update
   */
  export type customersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to update a customers.
     */
    data: XOR<customersUpdateInput, customersUncheckedUpdateInput>
    /**
     * Choose, which customers to update.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers updateMany
   */
  export type customersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers updateManyAndReturn
   */
  export type customersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers upsert
   */
  export type customersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The filter to search for the customers to update in case it exists.
     */
    where: customersWhereUniqueInput
    /**
     * In case the customers found by the `where` argument doesn't exist, create a new customers with this data.
     */
    create: XOR<customersCreateInput, customersUncheckedCreateInput>
    /**
     * In case the customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customersUpdateInput, customersUncheckedUpdateInput>
  }

  /**
   * customers delete
   */
  export type customersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter which customers to delete.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers deleteMany
   */
  export type customersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customers.vouchers
   */
  export type customers$vouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    where?: vouchersWhereInput
    orderBy?: vouchersOrderByWithRelationInput | vouchersOrderByWithRelationInput[]
    cursor?: vouchersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VouchersScalarFieldEnum | VouchersScalarFieldEnum[]
  }

  /**
   * customers without action
   */
  export type customersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
  }


  /**
   * Model vendors
   */

  export type AggregateVendors = {
    _count: VendorsCountAggregateOutputType | null
    _min: VendorsMinAggregateOutputType | null
    _max: VendorsMaxAggregateOutputType | null
  }

  export type VendorsMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone_number: string | null
    created_at: Date | null
  }

  export type VendorsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone_number: string | null
    created_at: Date | null
  }

  export type VendorsCountAggregateOutputType = {
    id: number
    name: number
    phone_number: number
    created_at: number
    _all: number
  }


  export type VendorsMinAggregateInputType = {
    id?: true
    name?: true
    phone_number?: true
    created_at?: true
  }

  export type VendorsMaxAggregateInputType = {
    id?: true
    name?: true
    phone_number?: true
    created_at?: true
  }

  export type VendorsCountAggregateInputType = {
    id?: true
    name?: true
    phone_number?: true
    created_at?: true
    _all?: true
  }

  export type VendorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vendors to aggregate.
     */
    where?: vendorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendors to fetch.
     */
    orderBy?: vendorsOrderByWithRelationInput | vendorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vendorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vendors
    **/
    _count?: true | VendorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorsMaxAggregateInputType
  }

  export type GetVendorsAggregateType<T extends VendorsAggregateArgs> = {
        [P in keyof T & keyof AggregateVendors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendors[P]>
      : GetScalarType<T[P], AggregateVendors[P]>
  }




  export type vendorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vendorsWhereInput
    orderBy?: vendorsOrderByWithAggregationInput | vendorsOrderByWithAggregationInput[]
    by: VendorsScalarFieldEnum[] | VendorsScalarFieldEnum
    having?: vendorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorsCountAggregateInputType | true
    _min?: VendorsMinAggregateInputType
    _max?: VendorsMaxAggregateInputType
  }

  export type VendorsGroupByOutputType = {
    id: string
    name: string
    phone_number: string | null
    created_at: Date | null
    _count: VendorsCountAggregateOutputType | null
    _min: VendorsMinAggregateOutputType | null
    _max: VendorsMaxAggregateOutputType | null
  }

  type GetVendorsGroupByPayload<T extends vendorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorsGroupByOutputType[P]>
            : GetScalarType<T[P], VendorsGroupByOutputType[P]>
        }
      >
    >


  export type vendorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone_number?: boolean
    created_at?: boolean
    vouchers?: boolean | vendors$vouchersArgs<ExtArgs>
    _count?: boolean | VendorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendors"]>

  export type vendorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone_number?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["vendors"]>

  export type vendorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone_number?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["vendors"]>

  export type vendorsSelectScalar = {
    id?: boolean
    name?: boolean
    phone_number?: boolean
    created_at?: boolean
  }

  export type vendorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone_number" | "created_at", ExtArgs["result"]["vendors"]>
  export type vendorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vouchers?: boolean | vendors$vouchersArgs<ExtArgs>
    _count?: boolean | VendorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type vendorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type vendorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $vendorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vendors"
    objects: {
      vouchers: Prisma.$vouchersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone_number: string | null
      created_at: Date | null
    }, ExtArgs["result"]["vendors"]>
    composites: {}
  }

  type vendorsGetPayload<S extends boolean | null | undefined | vendorsDefaultArgs> = $Result.GetResult<Prisma.$vendorsPayload, S>

  type vendorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vendorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorsCountAggregateInputType | true
    }

  export interface vendorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vendors'], meta: { name: 'vendors' } }
    /**
     * Find zero or one Vendors that matches the filter.
     * @param {vendorsFindUniqueArgs} args - Arguments to find a Vendors
     * @example
     * // Get one Vendors
     * const vendors = await prisma.vendors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vendorsFindUniqueArgs>(args: SelectSubset<T, vendorsFindUniqueArgs<ExtArgs>>): Prisma__vendorsClient<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vendorsFindUniqueOrThrowArgs} args - Arguments to find a Vendors
     * @example
     * // Get one Vendors
     * const vendors = await prisma.vendors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vendorsFindUniqueOrThrowArgs>(args: SelectSubset<T, vendorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vendorsClient<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorsFindFirstArgs} args - Arguments to find a Vendors
     * @example
     * // Get one Vendors
     * const vendors = await prisma.vendors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vendorsFindFirstArgs>(args?: SelectSubset<T, vendorsFindFirstArgs<ExtArgs>>): Prisma__vendorsClient<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorsFindFirstOrThrowArgs} args - Arguments to find a Vendors
     * @example
     * // Get one Vendors
     * const vendors = await prisma.vendors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vendorsFindFirstOrThrowArgs>(args?: SelectSubset<T, vendorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__vendorsClient<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendors.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorsWithIdOnly = await prisma.vendors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vendorsFindManyArgs>(args?: SelectSubset<T, vendorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendors.
     * @param {vendorsCreateArgs} args - Arguments to create a Vendors.
     * @example
     * // Create one Vendors
     * const Vendors = await prisma.vendors.create({
     *   data: {
     *     // ... data to create a Vendors
     *   }
     * })
     * 
     */
    create<T extends vendorsCreateArgs>(args: SelectSubset<T, vendorsCreateArgs<ExtArgs>>): Prisma__vendorsClient<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendors.
     * @param {vendorsCreateManyArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendors = await prisma.vendors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vendorsCreateManyArgs>(args?: SelectSubset<T, vendorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendors and returns the data saved in the database.
     * @param {vendorsCreateManyAndReturnArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendors = await prisma.vendors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendors and only return the `id`
     * const vendorsWithIdOnly = await prisma.vendors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vendorsCreateManyAndReturnArgs>(args?: SelectSubset<T, vendorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vendors.
     * @param {vendorsDeleteArgs} args - Arguments to delete one Vendors.
     * @example
     * // Delete one Vendors
     * const Vendors = await prisma.vendors.delete({
     *   where: {
     *     // ... filter to delete one Vendors
     *   }
     * })
     * 
     */
    delete<T extends vendorsDeleteArgs>(args: SelectSubset<T, vendorsDeleteArgs<ExtArgs>>): Prisma__vendorsClient<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendors.
     * @param {vendorsUpdateArgs} args - Arguments to update one Vendors.
     * @example
     * // Update one Vendors
     * const vendors = await prisma.vendors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vendorsUpdateArgs>(args: SelectSubset<T, vendorsUpdateArgs<ExtArgs>>): Prisma__vendorsClient<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendors.
     * @param {vendorsDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vendorsDeleteManyArgs>(args?: SelectSubset<T, vendorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendors = await prisma.vendors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vendorsUpdateManyArgs>(args: SelectSubset<T, vendorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors and returns the data updated in the database.
     * @param {vendorsUpdateManyAndReturnArgs} args - Arguments to update many Vendors.
     * @example
     * // Update many Vendors
     * const vendors = await prisma.vendors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vendors and only return the `id`
     * const vendorsWithIdOnly = await prisma.vendors.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends vendorsUpdateManyAndReturnArgs>(args: SelectSubset<T, vendorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vendors.
     * @param {vendorsUpsertArgs} args - Arguments to update or create a Vendors.
     * @example
     * // Update or create a Vendors
     * const vendors = await prisma.vendors.upsert({
     *   create: {
     *     // ... data to create a Vendors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendors we want to update
     *   }
     * })
     */
    upsert<T extends vendorsUpsertArgs>(args: SelectSubset<T, vendorsUpsertArgs<ExtArgs>>): Prisma__vendorsClient<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorsCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendors.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends vendorsCountArgs>(
      args?: Subset<T, vendorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorsAggregateArgs>(args: Subset<T, VendorsAggregateArgs>): Prisma.PrismaPromise<GetVendorsAggregateType<T>>

    /**
     * Group by Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vendorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vendorsGroupByArgs['orderBy'] }
        : { orderBy?: vendorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vendorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vendors model
   */
  readonly fields: vendorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vendors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vendorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vouchers<T extends vendors$vouchersArgs<ExtArgs> = {}>(args?: Subset<T, vendors$vouchersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vendors model
   */
  interface vendorsFieldRefs {
    readonly id: FieldRef<"vendors", 'String'>
    readonly name: FieldRef<"vendors", 'String'>
    readonly phone_number: FieldRef<"vendors", 'String'>
    readonly created_at: FieldRef<"vendors", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * vendors findUnique
   */
  export type vendorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
    /**
     * Filter, which vendors to fetch.
     */
    where: vendorsWhereUniqueInput
  }

  /**
   * vendors findUniqueOrThrow
   */
  export type vendorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
    /**
     * Filter, which vendors to fetch.
     */
    where: vendorsWhereUniqueInput
  }

  /**
   * vendors findFirst
   */
  export type vendorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
    /**
     * Filter, which vendors to fetch.
     */
    where?: vendorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendors to fetch.
     */
    orderBy?: vendorsOrderByWithRelationInput | vendorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vendors.
     */
    cursor?: vendorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vendors.
     */
    distinct?: VendorsScalarFieldEnum | VendorsScalarFieldEnum[]
  }

  /**
   * vendors findFirstOrThrow
   */
  export type vendorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
    /**
     * Filter, which vendors to fetch.
     */
    where?: vendorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendors to fetch.
     */
    orderBy?: vendorsOrderByWithRelationInput | vendorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vendors.
     */
    cursor?: vendorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vendors.
     */
    distinct?: VendorsScalarFieldEnum | VendorsScalarFieldEnum[]
  }

  /**
   * vendors findMany
   */
  export type vendorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
    /**
     * Filter, which vendors to fetch.
     */
    where?: vendorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendors to fetch.
     */
    orderBy?: vendorsOrderByWithRelationInput | vendorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vendors.
     */
    cursor?: vendorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendors.
     */
    skip?: number
    distinct?: VendorsScalarFieldEnum | VendorsScalarFieldEnum[]
  }

  /**
   * vendors create
   */
  export type vendorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
    /**
     * The data needed to create a vendors.
     */
    data: XOR<vendorsCreateInput, vendorsUncheckedCreateInput>
  }

  /**
   * vendors createMany
   */
  export type vendorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vendors.
     */
    data: vendorsCreateManyInput | vendorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vendors createManyAndReturn
   */
  export type vendorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * The data used to create many vendors.
     */
    data: vendorsCreateManyInput | vendorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vendors update
   */
  export type vendorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
    /**
     * The data needed to update a vendors.
     */
    data: XOR<vendorsUpdateInput, vendorsUncheckedUpdateInput>
    /**
     * Choose, which vendors to update.
     */
    where: vendorsWhereUniqueInput
  }

  /**
   * vendors updateMany
   */
  export type vendorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vendors.
     */
    data: XOR<vendorsUpdateManyMutationInput, vendorsUncheckedUpdateManyInput>
    /**
     * Filter which vendors to update
     */
    where?: vendorsWhereInput
    /**
     * Limit how many vendors to update.
     */
    limit?: number
  }

  /**
   * vendors updateManyAndReturn
   */
  export type vendorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * The data used to update vendors.
     */
    data: XOR<vendorsUpdateManyMutationInput, vendorsUncheckedUpdateManyInput>
    /**
     * Filter which vendors to update
     */
    where?: vendorsWhereInput
    /**
     * Limit how many vendors to update.
     */
    limit?: number
  }

  /**
   * vendors upsert
   */
  export type vendorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
    /**
     * The filter to search for the vendors to update in case it exists.
     */
    where: vendorsWhereUniqueInput
    /**
     * In case the vendors found by the `where` argument doesn't exist, create a new vendors with this data.
     */
    create: XOR<vendorsCreateInput, vendorsUncheckedCreateInput>
    /**
     * In case the vendors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vendorsUpdateInput, vendorsUncheckedUpdateInput>
  }

  /**
   * vendors delete
   */
  export type vendorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
    /**
     * Filter which vendors to delete.
     */
    where: vendorsWhereUniqueInput
  }

  /**
   * vendors deleteMany
   */
  export type vendorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vendors to delete
     */
    where?: vendorsWhereInput
    /**
     * Limit how many vendors to delete.
     */
    limit?: number
  }

  /**
   * vendors.vouchers
   */
  export type vendors$vouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    where?: vouchersWhereInput
    orderBy?: vouchersOrderByWithRelationInput | vouchersOrderByWithRelationInput[]
    cursor?: vouchersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VouchersScalarFieldEnum | VouchersScalarFieldEnum[]
  }

  /**
   * vendors without action
   */
  export type vendorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
  }


  /**
   * Model voucher_logs
   */

  export type AggregateVoucher_logs = {
    _count: Voucher_logsCountAggregateOutputType | null
    _min: Voucher_logsMinAggregateOutputType | null
    _max: Voucher_logsMaxAggregateOutputType | null
  }

  export type Voucher_logsMinAggregateOutputType = {
    id: string | null
    voucher_id: string | null
    status: string | null
    message: string | null
    created_at: Date | null
  }

  export type Voucher_logsMaxAggregateOutputType = {
    id: string | null
    voucher_id: string | null
    status: string | null
    message: string | null
    created_at: Date | null
  }

  export type Voucher_logsCountAggregateOutputType = {
    id: number
    voucher_id: number
    status: number
    message: number
    created_at: number
    _all: number
  }


  export type Voucher_logsMinAggregateInputType = {
    id?: true
    voucher_id?: true
    status?: true
    message?: true
    created_at?: true
  }

  export type Voucher_logsMaxAggregateInputType = {
    id?: true
    voucher_id?: true
    status?: true
    message?: true
    created_at?: true
  }

  export type Voucher_logsCountAggregateInputType = {
    id?: true
    voucher_id?: true
    status?: true
    message?: true
    created_at?: true
    _all?: true
  }

  export type Voucher_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which voucher_logs to aggregate.
     */
    where?: voucher_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voucher_logs to fetch.
     */
    orderBy?: voucher_logsOrderByWithRelationInput | voucher_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: voucher_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voucher_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voucher_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned voucher_logs
    **/
    _count?: true | Voucher_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Voucher_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Voucher_logsMaxAggregateInputType
  }

  export type GetVoucher_logsAggregateType<T extends Voucher_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateVoucher_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoucher_logs[P]>
      : GetScalarType<T[P], AggregateVoucher_logs[P]>
  }




  export type voucher_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voucher_logsWhereInput
    orderBy?: voucher_logsOrderByWithAggregationInput | voucher_logsOrderByWithAggregationInput[]
    by: Voucher_logsScalarFieldEnum[] | Voucher_logsScalarFieldEnum
    having?: voucher_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Voucher_logsCountAggregateInputType | true
    _min?: Voucher_logsMinAggregateInputType
    _max?: Voucher_logsMaxAggregateInputType
  }

  export type Voucher_logsGroupByOutputType = {
    id: string
    voucher_id: string | null
    status: string | null
    message: string | null
    created_at: Date | null
    _count: Voucher_logsCountAggregateOutputType | null
    _min: Voucher_logsMinAggregateOutputType | null
    _max: Voucher_logsMaxAggregateOutputType | null
  }

  type GetVoucher_logsGroupByPayload<T extends voucher_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Voucher_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Voucher_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Voucher_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Voucher_logsGroupByOutputType[P]>
        }
      >
    >


  export type voucher_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voucher_id?: boolean
    status?: boolean
    message?: boolean
    created_at?: boolean
    vouchers?: boolean | voucher_logs$vouchersArgs<ExtArgs>
  }, ExtArgs["result"]["voucher_logs"]>

  export type voucher_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voucher_id?: boolean
    status?: boolean
    message?: boolean
    created_at?: boolean
    vouchers?: boolean | voucher_logs$vouchersArgs<ExtArgs>
  }, ExtArgs["result"]["voucher_logs"]>

  export type voucher_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voucher_id?: boolean
    status?: boolean
    message?: boolean
    created_at?: boolean
    vouchers?: boolean | voucher_logs$vouchersArgs<ExtArgs>
  }, ExtArgs["result"]["voucher_logs"]>

  export type voucher_logsSelectScalar = {
    id?: boolean
    voucher_id?: boolean
    status?: boolean
    message?: boolean
    created_at?: boolean
  }

  export type voucher_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "voucher_id" | "status" | "message" | "created_at", ExtArgs["result"]["voucher_logs"]>
  export type voucher_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vouchers?: boolean | voucher_logs$vouchersArgs<ExtArgs>
  }
  export type voucher_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vouchers?: boolean | voucher_logs$vouchersArgs<ExtArgs>
  }
  export type voucher_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vouchers?: boolean | voucher_logs$vouchersArgs<ExtArgs>
  }

  export type $voucher_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "voucher_logs"
    objects: {
      vouchers: Prisma.$vouchersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      voucher_id: string | null
      status: string | null
      message: string | null
      created_at: Date | null
    }, ExtArgs["result"]["voucher_logs"]>
    composites: {}
  }

  type voucher_logsGetPayload<S extends boolean | null | undefined | voucher_logsDefaultArgs> = $Result.GetResult<Prisma.$voucher_logsPayload, S>

  type voucher_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<voucher_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Voucher_logsCountAggregateInputType | true
    }

  export interface voucher_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['voucher_logs'], meta: { name: 'voucher_logs' } }
    /**
     * Find zero or one Voucher_logs that matches the filter.
     * @param {voucher_logsFindUniqueArgs} args - Arguments to find a Voucher_logs
     * @example
     * // Get one Voucher_logs
     * const voucher_logs = await prisma.voucher_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends voucher_logsFindUniqueArgs>(args: SelectSubset<T, voucher_logsFindUniqueArgs<ExtArgs>>): Prisma__voucher_logsClient<$Result.GetResult<Prisma.$voucher_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voucher_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {voucher_logsFindUniqueOrThrowArgs} args - Arguments to find a Voucher_logs
     * @example
     * // Get one Voucher_logs
     * const voucher_logs = await prisma.voucher_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends voucher_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, voucher_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__voucher_logsClient<$Result.GetResult<Prisma.$voucher_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voucher_logsFindFirstArgs} args - Arguments to find a Voucher_logs
     * @example
     * // Get one Voucher_logs
     * const voucher_logs = await prisma.voucher_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends voucher_logsFindFirstArgs>(args?: SelectSubset<T, voucher_logsFindFirstArgs<ExtArgs>>): Prisma__voucher_logsClient<$Result.GetResult<Prisma.$voucher_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voucher_logsFindFirstOrThrowArgs} args - Arguments to find a Voucher_logs
     * @example
     * // Get one Voucher_logs
     * const voucher_logs = await prisma.voucher_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends voucher_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, voucher_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__voucher_logsClient<$Result.GetResult<Prisma.$voucher_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Voucher_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voucher_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Voucher_logs
     * const voucher_logs = await prisma.voucher_logs.findMany()
     * 
     * // Get first 10 Voucher_logs
     * const voucher_logs = await prisma.voucher_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voucher_logsWithIdOnly = await prisma.voucher_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends voucher_logsFindManyArgs>(args?: SelectSubset<T, voucher_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voucher_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voucher_logs.
     * @param {voucher_logsCreateArgs} args - Arguments to create a Voucher_logs.
     * @example
     * // Create one Voucher_logs
     * const Voucher_logs = await prisma.voucher_logs.create({
     *   data: {
     *     // ... data to create a Voucher_logs
     *   }
     * })
     * 
     */
    create<T extends voucher_logsCreateArgs>(args: SelectSubset<T, voucher_logsCreateArgs<ExtArgs>>): Prisma__voucher_logsClient<$Result.GetResult<Prisma.$voucher_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Voucher_logs.
     * @param {voucher_logsCreateManyArgs} args - Arguments to create many Voucher_logs.
     * @example
     * // Create many Voucher_logs
     * const voucher_logs = await prisma.voucher_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends voucher_logsCreateManyArgs>(args?: SelectSubset<T, voucher_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Voucher_logs and returns the data saved in the database.
     * @param {voucher_logsCreateManyAndReturnArgs} args - Arguments to create many Voucher_logs.
     * @example
     * // Create many Voucher_logs
     * const voucher_logs = await prisma.voucher_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Voucher_logs and only return the `id`
     * const voucher_logsWithIdOnly = await prisma.voucher_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends voucher_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, voucher_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voucher_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voucher_logs.
     * @param {voucher_logsDeleteArgs} args - Arguments to delete one Voucher_logs.
     * @example
     * // Delete one Voucher_logs
     * const Voucher_logs = await prisma.voucher_logs.delete({
     *   where: {
     *     // ... filter to delete one Voucher_logs
     *   }
     * })
     * 
     */
    delete<T extends voucher_logsDeleteArgs>(args: SelectSubset<T, voucher_logsDeleteArgs<ExtArgs>>): Prisma__voucher_logsClient<$Result.GetResult<Prisma.$voucher_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voucher_logs.
     * @param {voucher_logsUpdateArgs} args - Arguments to update one Voucher_logs.
     * @example
     * // Update one Voucher_logs
     * const voucher_logs = await prisma.voucher_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends voucher_logsUpdateArgs>(args: SelectSubset<T, voucher_logsUpdateArgs<ExtArgs>>): Prisma__voucher_logsClient<$Result.GetResult<Prisma.$voucher_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Voucher_logs.
     * @param {voucher_logsDeleteManyArgs} args - Arguments to filter Voucher_logs to delete.
     * @example
     * // Delete a few Voucher_logs
     * const { count } = await prisma.voucher_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends voucher_logsDeleteManyArgs>(args?: SelectSubset<T, voucher_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voucher_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voucher_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Voucher_logs
     * const voucher_logs = await prisma.voucher_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends voucher_logsUpdateManyArgs>(args: SelectSubset<T, voucher_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voucher_logs and returns the data updated in the database.
     * @param {voucher_logsUpdateManyAndReturnArgs} args - Arguments to update many Voucher_logs.
     * @example
     * // Update many Voucher_logs
     * const voucher_logs = await prisma.voucher_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Voucher_logs and only return the `id`
     * const voucher_logsWithIdOnly = await prisma.voucher_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends voucher_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, voucher_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voucher_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voucher_logs.
     * @param {voucher_logsUpsertArgs} args - Arguments to update or create a Voucher_logs.
     * @example
     * // Update or create a Voucher_logs
     * const voucher_logs = await prisma.voucher_logs.upsert({
     *   create: {
     *     // ... data to create a Voucher_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voucher_logs we want to update
     *   }
     * })
     */
    upsert<T extends voucher_logsUpsertArgs>(args: SelectSubset<T, voucher_logsUpsertArgs<ExtArgs>>): Prisma__voucher_logsClient<$Result.GetResult<Prisma.$voucher_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Voucher_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voucher_logsCountArgs} args - Arguments to filter Voucher_logs to count.
     * @example
     * // Count the number of Voucher_logs
     * const count = await prisma.voucher_logs.count({
     *   where: {
     *     // ... the filter for the Voucher_logs we want to count
     *   }
     * })
    **/
    count<T extends voucher_logsCountArgs>(
      args?: Subset<T, voucher_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Voucher_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voucher_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Voucher_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Voucher_logsAggregateArgs>(args: Subset<T, Voucher_logsAggregateArgs>): Prisma.PrismaPromise<GetVoucher_logsAggregateType<T>>

    /**
     * Group by Voucher_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voucher_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends voucher_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: voucher_logsGroupByArgs['orderBy'] }
        : { orderBy?: voucher_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, voucher_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoucher_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the voucher_logs model
   */
  readonly fields: voucher_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for voucher_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__voucher_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vouchers<T extends voucher_logs$vouchersArgs<ExtArgs> = {}>(args?: Subset<T, voucher_logs$vouchersArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the voucher_logs model
   */
  interface voucher_logsFieldRefs {
    readonly id: FieldRef<"voucher_logs", 'String'>
    readonly voucher_id: FieldRef<"voucher_logs", 'String'>
    readonly status: FieldRef<"voucher_logs", 'String'>
    readonly message: FieldRef<"voucher_logs", 'String'>
    readonly created_at: FieldRef<"voucher_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * voucher_logs findUnique
   */
  export type voucher_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voucher_logs
     */
    select?: voucher_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voucher_logs
     */
    omit?: voucher_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voucher_logsInclude<ExtArgs> | null
    /**
     * Filter, which voucher_logs to fetch.
     */
    where: voucher_logsWhereUniqueInput
  }

  /**
   * voucher_logs findUniqueOrThrow
   */
  export type voucher_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voucher_logs
     */
    select?: voucher_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voucher_logs
     */
    omit?: voucher_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voucher_logsInclude<ExtArgs> | null
    /**
     * Filter, which voucher_logs to fetch.
     */
    where: voucher_logsWhereUniqueInput
  }

  /**
   * voucher_logs findFirst
   */
  export type voucher_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voucher_logs
     */
    select?: voucher_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voucher_logs
     */
    omit?: voucher_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voucher_logsInclude<ExtArgs> | null
    /**
     * Filter, which voucher_logs to fetch.
     */
    where?: voucher_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voucher_logs to fetch.
     */
    orderBy?: voucher_logsOrderByWithRelationInput | voucher_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for voucher_logs.
     */
    cursor?: voucher_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voucher_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voucher_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of voucher_logs.
     */
    distinct?: Voucher_logsScalarFieldEnum | Voucher_logsScalarFieldEnum[]
  }

  /**
   * voucher_logs findFirstOrThrow
   */
  export type voucher_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voucher_logs
     */
    select?: voucher_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voucher_logs
     */
    omit?: voucher_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voucher_logsInclude<ExtArgs> | null
    /**
     * Filter, which voucher_logs to fetch.
     */
    where?: voucher_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voucher_logs to fetch.
     */
    orderBy?: voucher_logsOrderByWithRelationInput | voucher_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for voucher_logs.
     */
    cursor?: voucher_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voucher_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voucher_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of voucher_logs.
     */
    distinct?: Voucher_logsScalarFieldEnum | Voucher_logsScalarFieldEnum[]
  }

  /**
   * voucher_logs findMany
   */
  export type voucher_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voucher_logs
     */
    select?: voucher_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voucher_logs
     */
    omit?: voucher_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voucher_logsInclude<ExtArgs> | null
    /**
     * Filter, which voucher_logs to fetch.
     */
    where?: voucher_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voucher_logs to fetch.
     */
    orderBy?: voucher_logsOrderByWithRelationInput | voucher_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing voucher_logs.
     */
    cursor?: voucher_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voucher_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voucher_logs.
     */
    skip?: number
    distinct?: Voucher_logsScalarFieldEnum | Voucher_logsScalarFieldEnum[]
  }

  /**
   * voucher_logs create
   */
  export type voucher_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voucher_logs
     */
    select?: voucher_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voucher_logs
     */
    omit?: voucher_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voucher_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a voucher_logs.
     */
    data?: XOR<voucher_logsCreateInput, voucher_logsUncheckedCreateInput>
  }

  /**
   * voucher_logs createMany
   */
  export type voucher_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many voucher_logs.
     */
    data: voucher_logsCreateManyInput | voucher_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * voucher_logs createManyAndReturn
   */
  export type voucher_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voucher_logs
     */
    select?: voucher_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the voucher_logs
     */
    omit?: voucher_logsOmit<ExtArgs> | null
    /**
     * The data used to create many voucher_logs.
     */
    data: voucher_logsCreateManyInput | voucher_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voucher_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * voucher_logs update
   */
  export type voucher_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voucher_logs
     */
    select?: voucher_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voucher_logs
     */
    omit?: voucher_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voucher_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a voucher_logs.
     */
    data: XOR<voucher_logsUpdateInput, voucher_logsUncheckedUpdateInput>
    /**
     * Choose, which voucher_logs to update.
     */
    where: voucher_logsWhereUniqueInput
  }

  /**
   * voucher_logs updateMany
   */
  export type voucher_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update voucher_logs.
     */
    data: XOR<voucher_logsUpdateManyMutationInput, voucher_logsUncheckedUpdateManyInput>
    /**
     * Filter which voucher_logs to update
     */
    where?: voucher_logsWhereInput
    /**
     * Limit how many voucher_logs to update.
     */
    limit?: number
  }

  /**
   * voucher_logs updateManyAndReturn
   */
  export type voucher_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voucher_logs
     */
    select?: voucher_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the voucher_logs
     */
    omit?: voucher_logsOmit<ExtArgs> | null
    /**
     * The data used to update voucher_logs.
     */
    data: XOR<voucher_logsUpdateManyMutationInput, voucher_logsUncheckedUpdateManyInput>
    /**
     * Filter which voucher_logs to update
     */
    where?: voucher_logsWhereInput
    /**
     * Limit how many voucher_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voucher_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * voucher_logs upsert
   */
  export type voucher_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voucher_logs
     */
    select?: voucher_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voucher_logs
     */
    omit?: voucher_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voucher_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the voucher_logs to update in case it exists.
     */
    where: voucher_logsWhereUniqueInput
    /**
     * In case the voucher_logs found by the `where` argument doesn't exist, create a new voucher_logs with this data.
     */
    create: XOR<voucher_logsCreateInput, voucher_logsUncheckedCreateInput>
    /**
     * In case the voucher_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<voucher_logsUpdateInput, voucher_logsUncheckedUpdateInput>
  }

  /**
   * voucher_logs delete
   */
  export type voucher_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voucher_logs
     */
    select?: voucher_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voucher_logs
     */
    omit?: voucher_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voucher_logsInclude<ExtArgs> | null
    /**
     * Filter which voucher_logs to delete.
     */
    where: voucher_logsWhereUniqueInput
  }

  /**
   * voucher_logs deleteMany
   */
  export type voucher_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which voucher_logs to delete
     */
    where?: voucher_logsWhereInput
    /**
     * Limit how many voucher_logs to delete.
     */
    limit?: number
  }

  /**
   * voucher_logs.vouchers
   */
  export type voucher_logs$vouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    where?: vouchersWhereInput
  }

  /**
   * voucher_logs without action
   */
  export type voucher_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voucher_logs
     */
    select?: voucher_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voucher_logs
     */
    omit?: voucher_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voucher_logsInclude<ExtArgs> | null
  }


  /**
   * Model vouchers
   */

  export type AggregateVouchers = {
    _count: VouchersCountAggregateOutputType | null
    _avg: VouchersAvgAggregateOutputType | null
    _sum: VouchersSumAggregateOutputType | null
    _min: VouchersMinAggregateOutputType | null
    _max: VouchersMaxAggregateOutputType | null
  }

  export type VouchersAvgAggregateOutputType = {
    value: number | null
  }

  export type VouchersSumAggregateOutputType = {
    value: number | null
  }

  export type VouchersMinAggregateOutputType = {
    id: string | null
    code: string | null
    is_redeemed: boolean | null
    redeemed_at: Date | null
    customer_id: string | null
    vendor_id: string | null
    sent: boolean | null
    sent_at: Date | null
    type: string | null
    value: number | null
    description: string | null
  }

  export type VouchersMaxAggregateOutputType = {
    id: string | null
    code: string | null
    is_redeemed: boolean | null
    redeemed_at: Date | null
    customer_id: string | null
    vendor_id: string | null
    sent: boolean | null
    sent_at: Date | null
    type: string | null
    value: number | null
    description: string | null
  }

  export type VouchersCountAggregateOutputType = {
    id: number
    code: number
    is_redeemed: number
    redeemed_at: number
    customer_id: number
    vendor_id: number
    sent: number
    sent_at: number
    type: number
    value: number
    description: number
    _all: number
  }


  export type VouchersAvgAggregateInputType = {
    value?: true
  }

  export type VouchersSumAggregateInputType = {
    value?: true
  }

  export type VouchersMinAggregateInputType = {
    id?: true
    code?: true
    is_redeemed?: true
    redeemed_at?: true
    customer_id?: true
    vendor_id?: true
    sent?: true
    sent_at?: true
    type?: true
    value?: true
    description?: true
  }

  export type VouchersMaxAggregateInputType = {
    id?: true
    code?: true
    is_redeemed?: true
    redeemed_at?: true
    customer_id?: true
    vendor_id?: true
    sent?: true
    sent_at?: true
    type?: true
    value?: true
    description?: true
  }

  export type VouchersCountAggregateInputType = {
    id?: true
    code?: true
    is_redeemed?: true
    redeemed_at?: true
    customer_id?: true
    vendor_id?: true
    sent?: true
    sent_at?: true
    type?: true
    value?: true
    description?: true
    _all?: true
  }

  export type VouchersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vouchers to aggregate.
     */
    where?: vouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vouchers to fetch.
     */
    orderBy?: vouchersOrderByWithRelationInput | vouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vouchers
    **/
    _count?: true | VouchersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VouchersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VouchersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VouchersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VouchersMaxAggregateInputType
  }

  export type GetVouchersAggregateType<T extends VouchersAggregateArgs> = {
        [P in keyof T & keyof AggregateVouchers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVouchers[P]>
      : GetScalarType<T[P], AggregateVouchers[P]>
  }




  export type vouchersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vouchersWhereInput
    orderBy?: vouchersOrderByWithAggregationInput | vouchersOrderByWithAggregationInput[]
    by: VouchersScalarFieldEnum[] | VouchersScalarFieldEnum
    having?: vouchersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VouchersCountAggregateInputType | true
    _avg?: VouchersAvgAggregateInputType
    _sum?: VouchersSumAggregateInputType
    _min?: VouchersMinAggregateInputType
    _max?: VouchersMaxAggregateInputType
  }

  export type VouchersGroupByOutputType = {
    id: string
    code: string
    is_redeemed: boolean | null
    redeemed_at: Date | null
    customer_id: string | null
    vendor_id: string | null
    sent: boolean | null
    sent_at: Date | null
    type: string
    value: number
    description: string | null
    _count: VouchersCountAggregateOutputType | null
    _avg: VouchersAvgAggregateOutputType | null
    _sum: VouchersSumAggregateOutputType | null
    _min: VouchersMinAggregateOutputType | null
    _max: VouchersMaxAggregateOutputType | null
  }

  type GetVouchersGroupByPayload<T extends vouchersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VouchersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VouchersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VouchersGroupByOutputType[P]>
            : GetScalarType<T[P], VouchersGroupByOutputType[P]>
        }
      >
    >


  export type vouchersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    is_redeemed?: boolean
    redeemed_at?: boolean
    customer_id?: boolean
    vendor_id?: boolean
    sent?: boolean
    sent_at?: boolean
    type?: boolean
    value?: boolean
    description?: boolean
    voucher_logs?: boolean | vouchers$voucher_logsArgs<ExtArgs>
    customers?: boolean | vouchers$customersArgs<ExtArgs>
    vendors?: boolean | vouchers$vendorsArgs<ExtArgs>
    _count?: boolean | VouchersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vouchers"]>

  export type vouchersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    is_redeemed?: boolean
    redeemed_at?: boolean
    customer_id?: boolean
    vendor_id?: boolean
    sent?: boolean
    sent_at?: boolean
    type?: boolean
    value?: boolean
    description?: boolean
    customers?: boolean | vouchers$customersArgs<ExtArgs>
    vendors?: boolean | vouchers$vendorsArgs<ExtArgs>
  }, ExtArgs["result"]["vouchers"]>

  export type vouchersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    is_redeemed?: boolean
    redeemed_at?: boolean
    customer_id?: boolean
    vendor_id?: boolean
    sent?: boolean
    sent_at?: boolean
    type?: boolean
    value?: boolean
    description?: boolean
    customers?: boolean | vouchers$customersArgs<ExtArgs>
    vendors?: boolean | vouchers$vendorsArgs<ExtArgs>
  }, ExtArgs["result"]["vouchers"]>

  export type vouchersSelectScalar = {
    id?: boolean
    code?: boolean
    is_redeemed?: boolean
    redeemed_at?: boolean
    customer_id?: boolean
    vendor_id?: boolean
    sent?: boolean
    sent_at?: boolean
    type?: boolean
    value?: boolean
    description?: boolean
  }

  export type vouchersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "is_redeemed" | "redeemed_at" | "customer_id" | "vendor_id" | "sent" | "sent_at" | "type" | "value" | "description", ExtArgs["result"]["vouchers"]>
  export type vouchersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voucher_logs?: boolean | vouchers$voucher_logsArgs<ExtArgs>
    customers?: boolean | vouchers$customersArgs<ExtArgs>
    vendors?: boolean | vouchers$vendorsArgs<ExtArgs>
    _count?: boolean | VouchersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type vouchersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | vouchers$customersArgs<ExtArgs>
    vendors?: boolean | vouchers$vendorsArgs<ExtArgs>
  }
  export type vouchersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | vouchers$customersArgs<ExtArgs>
    vendors?: boolean | vouchers$vendorsArgs<ExtArgs>
  }

  export type $vouchersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vouchers"
    objects: {
      voucher_logs: Prisma.$voucher_logsPayload<ExtArgs>[]
      customers: Prisma.$customersPayload<ExtArgs> | null
      vendors: Prisma.$vendorsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      is_redeemed: boolean | null
      redeemed_at: Date | null
      customer_id: string | null
      vendor_id: string | null
      sent: boolean | null
      sent_at: Date | null
      type: string
      value: number
      description: string | null
    }, ExtArgs["result"]["vouchers"]>
    composites: {}
  }

  type vouchersGetPayload<S extends boolean | null | undefined | vouchersDefaultArgs> = $Result.GetResult<Prisma.$vouchersPayload, S>

  type vouchersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vouchersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VouchersCountAggregateInputType | true
    }

  export interface vouchersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vouchers'], meta: { name: 'vouchers' } }
    /**
     * Find zero or one Vouchers that matches the filter.
     * @param {vouchersFindUniqueArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vouchersFindUniqueArgs>(args: SelectSubset<T, vouchersFindUniqueArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vouchers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vouchersFindUniqueOrThrowArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vouchersFindUniqueOrThrowArgs>(args: SelectSubset<T, vouchersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersFindFirstArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vouchersFindFirstArgs>(args?: SelectSubset<T, vouchersFindFirstArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vouchers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersFindFirstOrThrowArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vouchersFindFirstOrThrowArgs>(args?: SelectSubset<T, vouchersFindFirstOrThrowArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vouchers
     * const vouchers = await prisma.vouchers.findMany()
     * 
     * // Get first 10 Vouchers
     * const vouchers = await prisma.vouchers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vouchersWithIdOnly = await prisma.vouchers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vouchersFindManyArgs>(args?: SelectSubset<T, vouchersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vouchers.
     * @param {vouchersCreateArgs} args - Arguments to create a Vouchers.
     * @example
     * // Create one Vouchers
     * const Vouchers = await prisma.vouchers.create({
     *   data: {
     *     // ... data to create a Vouchers
     *   }
     * })
     * 
     */
    create<T extends vouchersCreateArgs>(args: SelectSubset<T, vouchersCreateArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vouchers.
     * @param {vouchersCreateManyArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const vouchers = await prisma.vouchers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vouchersCreateManyArgs>(args?: SelectSubset<T, vouchersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vouchers and returns the data saved in the database.
     * @param {vouchersCreateManyAndReturnArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const vouchers = await prisma.vouchers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vouchers and only return the `id`
     * const vouchersWithIdOnly = await prisma.vouchers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vouchersCreateManyAndReturnArgs>(args?: SelectSubset<T, vouchersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vouchers.
     * @param {vouchersDeleteArgs} args - Arguments to delete one Vouchers.
     * @example
     * // Delete one Vouchers
     * const Vouchers = await prisma.vouchers.delete({
     *   where: {
     *     // ... filter to delete one Vouchers
     *   }
     * })
     * 
     */
    delete<T extends vouchersDeleteArgs>(args: SelectSubset<T, vouchersDeleteArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vouchers.
     * @param {vouchersUpdateArgs} args - Arguments to update one Vouchers.
     * @example
     * // Update one Vouchers
     * const vouchers = await prisma.vouchers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vouchersUpdateArgs>(args: SelectSubset<T, vouchersUpdateArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vouchers.
     * @param {vouchersDeleteManyArgs} args - Arguments to filter Vouchers to delete.
     * @example
     * // Delete a few Vouchers
     * const { count } = await prisma.vouchers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vouchersDeleteManyArgs>(args?: SelectSubset<T, vouchersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vouchers
     * const vouchers = await prisma.vouchers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vouchersUpdateManyArgs>(args: SelectSubset<T, vouchersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers and returns the data updated in the database.
     * @param {vouchersUpdateManyAndReturnArgs} args - Arguments to update many Vouchers.
     * @example
     * // Update many Vouchers
     * const vouchers = await prisma.vouchers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vouchers and only return the `id`
     * const vouchersWithIdOnly = await prisma.vouchers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends vouchersUpdateManyAndReturnArgs>(args: SelectSubset<T, vouchersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vouchers.
     * @param {vouchersUpsertArgs} args - Arguments to update or create a Vouchers.
     * @example
     * // Update or create a Vouchers
     * const vouchers = await prisma.vouchers.upsert({
     *   create: {
     *     // ... data to create a Vouchers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vouchers we want to update
     *   }
     * })
     */
    upsert<T extends vouchersUpsertArgs>(args: SelectSubset<T, vouchersUpsertArgs<ExtArgs>>): Prisma__vouchersClient<$Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersCountArgs} args - Arguments to filter Vouchers to count.
     * @example
     * // Count the number of Vouchers
     * const count = await prisma.vouchers.count({
     *   where: {
     *     // ... the filter for the Vouchers we want to count
     *   }
     * })
    **/
    count<T extends vouchersCountArgs>(
      args?: Subset<T, vouchersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VouchersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VouchersAggregateArgs>(args: Subset<T, VouchersAggregateArgs>): Prisma.PrismaPromise<GetVouchersAggregateType<T>>

    /**
     * Group by Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vouchersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vouchersGroupByArgs['orderBy'] }
        : { orderBy?: vouchersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vouchersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVouchersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vouchers model
   */
  readonly fields: vouchersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vouchers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vouchersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voucher_logs<T extends vouchers$voucher_logsArgs<ExtArgs> = {}>(args?: Subset<T, vouchers$voucher_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voucher_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customers<T extends vouchers$customersArgs<ExtArgs> = {}>(args?: Subset<T, vouchers$customersArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vendors<T extends vouchers$vendorsArgs<ExtArgs> = {}>(args?: Subset<T, vouchers$vendorsArgs<ExtArgs>>): Prisma__vendorsClient<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vouchers model
   */
  interface vouchersFieldRefs {
    readonly id: FieldRef<"vouchers", 'String'>
    readonly code: FieldRef<"vouchers", 'String'>
    readonly is_redeemed: FieldRef<"vouchers", 'Boolean'>
    readonly redeemed_at: FieldRef<"vouchers", 'DateTime'>
    readonly customer_id: FieldRef<"vouchers", 'String'>
    readonly vendor_id: FieldRef<"vouchers", 'String'>
    readonly sent: FieldRef<"vouchers", 'Boolean'>
    readonly sent_at: FieldRef<"vouchers", 'DateTime'>
    readonly type: FieldRef<"vouchers", 'String'>
    readonly value: FieldRef<"vouchers", 'Int'>
    readonly description: FieldRef<"vouchers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vouchers findUnique
   */
  export type vouchersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * Filter, which vouchers to fetch.
     */
    where: vouchersWhereUniqueInput
  }

  /**
   * vouchers findUniqueOrThrow
   */
  export type vouchersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * Filter, which vouchers to fetch.
     */
    where: vouchersWhereUniqueInput
  }

  /**
   * vouchers findFirst
   */
  export type vouchersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * Filter, which vouchers to fetch.
     */
    where?: vouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vouchers to fetch.
     */
    orderBy?: vouchersOrderByWithRelationInput | vouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vouchers.
     */
    cursor?: vouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vouchers.
     */
    distinct?: VouchersScalarFieldEnum | VouchersScalarFieldEnum[]
  }

  /**
   * vouchers findFirstOrThrow
   */
  export type vouchersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * Filter, which vouchers to fetch.
     */
    where?: vouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vouchers to fetch.
     */
    orderBy?: vouchersOrderByWithRelationInput | vouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vouchers.
     */
    cursor?: vouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vouchers.
     */
    distinct?: VouchersScalarFieldEnum | VouchersScalarFieldEnum[]
  }

  /**
   * vouchers findMany
   */
  export type vouchersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * Filter, which vouchers to fetch.
     */
    where?: vouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vouchers to fetch.
     */
    orderBy?: vouchersOrderByWithRelationInput | vouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vouchers.
     */
    cursor?: vouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vouchers.
     */
    skip?: number
    distinct?: VouchersScalarFieldEnum | VouchersScalarFieldEnum[]
  }

  /**
   * vouchers create
   */
  export type vouchersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * The data needed to create a vouchers.
     */
    data: XOR<vouchersCreateInput, vouchersUncheckedCreateInput>
  }

  /**
   * vouchers createMany
   */
  export type vouchersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vouchers.
     */
    data: vouchersCreateManyInput | vouchersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vouchers createManyAndReturn
   */
  export type vouchersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * The data used to create many vouchers.
     */
    data: vouchersCreateManyInput | vouchersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * vouchers update
   */
  export type vouchersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * The data needed to update a vouchers.
     */
    data: XOR<vouchersUpdateInput, vouchersUncheckedUpdateInput>
    /**
     * Choose, which vouchers to update.
     */
    where: vouchersWhereUniqueInput
  }

  /**
   * vouchers updateMany
   */
  export type vouchersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vouchers.
     */
    data: XOR<vouchersUpdateManyMutationInput, vouchersUncheckedUpdateManyInput>
    /**
     * Filter which vouchers to update
     */
    where?: vouchersWhereInput
    /**
     * Limit how many vouchers to update.
     */
    limit?: number
  }

  /**
   * vouchers updateManyAndReturn
   */
  export type vouchersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * The data used to update vouchers.
     */
    data: XOR<vouchersUpdateManyMutationInput, vouchersUncheckedUpdateManyInput>
    /**
     * Filter which vouchers to update
     */
    where?: vouchersWhereInput
    /**
     * Limit how many vouchers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * vouchers upsert
   */
  export type vouchersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * The filter to search for the vouchers to update in case it exists.
     */
    where: vouchersWhereUniqueInput
    /**
     * In case the vouchers found by the `where` argument doesn't exist, create a new vouchers with this data.
     */
    create: XOR<vouchersCreateInput, vouchersUncheckedCreateInput>
    /**
     * In case the vouchers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vouchersUpdateInput, vouchersUncheckedUpdateInput>
  }

  /**
   * vouchers delete
   */
  export type vouchersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
    /**
     * Filter which vouchers to delete.
     */
    where: vouchersWhereUniqueInput
  }

  /**
   * vouchers deleteMany
   */
  export type vouchersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vouchers to delete
     */
    where?: vouchersWhereInput
    /**
     * Limit how many vouchers to delete.
     */
    limit?: number
  }

  /**
   * vouchers.voucher_logs
   */
  export type vouchers$voucher_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voucher_logs
     */
    select?: voucher_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voucher_logs
     */
    omit?: voucher_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voucher_logsInclude<ExtArgs> | null
    where?: voucher_logsWhereInput
    orderBy?: voucher_logsOrderByWithRelationInput | voucher_logsOrderByWithRelationInput[]
    cursor?: voucher_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Voucher_logsScalarFieldEnum | Voucher_logsScalarFieldEnum[]
  }

  /**
   * vouchers.customers
   */
  export type vouchers$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    where?: customersWhereInput
  }

  /**
   * vouchers.vendors
   */
  export type vouchers$vendorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
    where?: vendorsWhereInput
  }

  /**
   * vouchers without action
   */
  export type vouchersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vouchers
     */
    omit?: vouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vouchersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomersScalarFieldEnum: {
    id: 'id',
    phone_number: 'phone_number',
    created_at: 'created_at'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const VendorsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone_number: 'phone_number',
    created_at: 'created_at'
  };

  export type VendorsScalarFieldEnum = (typeof VendorsScalarFieldEnum)[keyof typeof VendorsScalarFieldEnum]


  export const Voucher_logsScalarFieldEnum: {
    id: 'id',
    voucher_id: 'voucher_id',
    status: 'status',
    message: 'message',
    created_at: 'created_at'
  };

  export type Voucher_logsScalarFieldEnum = (typeof Voucher_logsScalarFieldEnum)[keyof typeof Voucher_logsScalarFieldEnum]


  export const VouchersScalarFieldEnum: {
    id: 'id',
    code: 'code',
    is_redeemed: 'is_redeemed',
    redeemed_at: 'redeemed_at',
    customer_id: 'customer_id',
    vendor_id: 'vendor_id',
    sent: 'sent',
    sent_at: 'sent_at',
    type: 'type',
    value: 'value',
    description: 'description'
  };

  export type VouchersScalarFieldEnum = (typeof VouchersScalarFieldEnum)[keyof typeof VouchersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type customersWhereInput = {
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    id?: UuidFilter<"customers"> | string
    phone_number?: StringFilter<"customers"> | string
    created_at?: DateTimeNullableFilter<"customers"> | Date | string | null
    vouchers?: VouchersListRelationFilter
  }

  export type customersOrderByWithRelationInput = {
    id?: SortOrder
    phone_number?: SortOrder
    created_at?: SortOrderInput | SortOrder
    vouchers?: vouchersOrderByRelationAggregateInput
  }

  export type customersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone_number?: string
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    created_at?: DateTimeNullableFilter<"customers"> | Date | string | null
    vouchers?: VouchersListRelationFilter
  }, "id" | "phone_number">

  export type customersOrderByWithAggregationInput = {
    id?: SortOrder
    phone_number?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: customersCountOrderByAggregateInput
    _max?: customersMaxOrderByAggregateInput
    _min?: customersMinOrderByAggregateInput
  }

  export type customersScalarWhereWithAggregatesInput = {
    AND?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    OR?: customersScalarWhereWithAggregatesInput[]
    NOT?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"customers"> | string
    phone_number?: StringWithAggregatesFilter<"customers"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"customers"> | Date | string | null
  }

  export type vendorsWhereInput = {
    AND?: vendorsWhereInput | vendorsWhereInput[]
    OR?: vendorsWhereInput[]
    NOT?: vendorsWhereInput | vendorsWhereInput[]
    id?: UuidFilter<"vendors"> | string
    name?: StringFilter<"vendors"> | string
    phone_number?: StringNullableFilter<"vendors"> | string | null
    created_at?: DateTimeNullableFilter<"vendors"> | Date | string | null
    vouchers?: VouchersListRelationFilter
  }

  export type vendorsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    vouchers?: vouchersOrderByRelationAggregateInput
  }

  export type vendorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: vendorsWhereInput | vendorsWhereInput[]
    OR?: vendorsWhereInput[]
    NOT?: vendorsWhereInput | vendorsWhereInput[]
    name?: StringFilter<"vendors"> | string
    phone_number?: StringNullableFilter<"vendors"> | string | null
    created_at?: DateTimeNullableFilter<"vendors"> | Date | string | null
    vouchers?: VouchersListRelationFilter
  }, "id">

  export type vendorsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: vendorsCountOrderByAggregateInput
    _max?: vendorsMaxOrderByAggregateInput
    _min?: vendorsMinOrderByAggregateInput
  }

  export type vendorsScalarWhereWithAggregatesInput = {
    AND?: vendorsScalarWhereWithAggregatesInput | vendorsScalarWhereWithAggregatesInput[]
    OR?: vendorsScalarWhereWithAggregatesInput[]
    NOT?: vendorsScalarWhereWithAggregatesInput | vendorsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"vendors"> | string
    name?: StringWithAggregatesFilter<"vendors"> | string
    phone_number?: StringNullableWithAggregatesFilter<"vendors"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"vendors"> | Date | string | null
  }

  export type voucher_logsWhereInput = {
    AND?: voucher_logsWhereInput | voucher_logsWhereInput[]
    OR?: voucher_logsWhereInput[]
    NOT?: voucher_logsWhereInput | voucher_logsWhereInput[]
    id?: UuidFilter<"voucher_logs"> | string
    voucher_id?: UuidNullableFilter<"voucher_logs"> | string | null
    status?: StringNullableFilter<"voucher_logs"> | string | null
    message?: StringNullableFilter<"voucher_logs"> | string | null
    created_at?: DateTimeNullableFilter<"voucher_logs"> | Date | string | null
    vouchers?: XOR<VouchersNullableScalarRelationFilter, vouchersWhereInput> | null
  }

  export type voucher_logsOrderByWithRelationInput = {
    id?: SortOrder
    voucher_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    vouchers?: vouchersOrderByWithRelationInput
  }

  export type voucher_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: voucher_logsWhereInput | voucher_logsWhereInput[]
    OR?: voucher_logsWhereInput[]
    NOT?: voucher_logsWhereInput | voucher_logsWhereInput[]
    voucher_id?: UuidNullableFilter<"voucher_logs"> | string | null
    status?: StringNullableFilter<"voucher_logs"> | string | null
    message?: StringNullableFilter<"voucher_logs"> | string | null
    created_at?: DateTimeNullableFilter<"voucher_logs"> | Date | string | null
    vouchers?: XOR<VouchersNullableScalarRelationFilter, vouchersWhereInput> | null
  }, "id">

  export type voucher_logsOrderByWithAggregationInput = {
    id?: SortOrder
    voucher_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: voucher_logsCountOrderByAggregateInput
    _max?: voucher_logsMaxOrderByAggregateInput
    _min?: voucher_logsMinOrderByAggregateInput
  }

  export type voucher_logsScalarWhereWithAggregatesInput = {
    AND?: voucher_logsScalarWhereWithAggregatesInput | voucher_logsScalarWhereWithAggregatesInput[]
    OR?: voucher_logsScalarWhereWithAggregatesInput[]
    NOT?: voucher_logsScalarWhereWithAggregatesInput | voucher_logsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"voucher_logs"> | string
    voucher_id?: UuidNullableWithAggregatesFilter<"voucher_logs"> | string | null
    status?: StringNullableWithAggregatesFilter<"voucher_logs"> | string | null
    message?: StringNullableWithAggregatesFilter<"voucher_logs"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"voucher_logs"> | Date | string | null
  }

  export type vouchersWhereInput = {
    AND?: vouchersWhereInput | vouchersWhereInput[]
    OR?: vouchersWhereInput[]
    NOT?: vouchersWhereInput | vouchersWhereInput[]
    id?: UuidFilter<"vouchers"> | string
    code?: StringFilter<"vouchers"> | string
    is_redeemed?: BoolNullableFilter<"vouchers"> | boolean | null
    redeemed_at?: DateTimeNullableFilter<"vouchers"> | Date | string | null
    customer_id?: UuidNullableFilter<"vouchers"> | string | null
    vendor_id?: UuidNullableFilter<"vouchers"> | string | null
    sent?: BoolNullableFilter<"vouchers"> | boolean | null
    sent_at?: DateTimeNullableFilter<"vouchers"> | Date | string | null
    type?: StringFilter<"vouchers"> | string
    value?: IntFilter<"vouchers"> | number
    description?: StringNullableFilter<"vouchers"> | string | null
    voucher_logs?: Voucher_logsListRelationFilter
    customers?: XOR<CustomersNullableScalarRelationFilter, customersWhereInput> | null
    vendors?: XOR<VendorsNullableScalarRelationFilter, vendorsWhereInput> | null
  }

  export type vouchersOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    is_redeemed?: SortOrderInput | SortOrder
    redeemed_at?: SortOrderInput | SortOrder
    customer_id?: SortOrderInput | SortOrder
    vendor_id?: SortOrderInput | SortOrder
    sent?: SortOrderInput | SortOrder
    sent_at?: SortOrderInput | SortOrder
    type?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    voucher_logs?: voucher_logsOrderByRelationAggregateInput
    customers?: customersOrderByWithRelationInput
    vendors?: vendorsOrderByWithRelationInput
  }

  export type vouchersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: vouchersWhereInput | vouchersWhereInput[]
    OR?: vouchersWhereInput[]
    NOT?: vouchersWhereInput | vouchersWhereInput[]
    is_redeemed?: BoolNullableFilter<"vouchers"> | boolean | null
    redeemed_at?: DateTimeNullableFilter<"vouchers"> | Date | string | null
    customer_id?: UuidNullableFilter<"vouchers"> | string | null
    vendor_id?: UuidNullableFilter<"vouchers"> | string | null
    sent?: BoolNullableFilter<"vouchers"> | boolean | null
    sent_at?: DateTimeNullableFilter<"vouchers"> | Date | string | null
    type?: StringFilter<"vouchers"> | string
    value?: IntFilter<"vouchers"> | number
    description?: StringNullableFilter<"vouchers"> | string | null
    voucher_logs?: Voucher_logsListRelationFilter
    customers?: XOR<CustomersNullableScalarRelationFilter, customersWhereInput> | null
    vendors?: XOR<VendorsNullableScalarRelationFilter, vendorsWhereInput> | null
  }, "id" | "code">

  export type vouchersOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    is_redeemed?: SortOrderInput | SortOrder
    redeemed_at?: SortOrderInput | SortOrder
    customer_id?: SortOrderInput | SortOrder
    vendor_id?: SortOrderInput | SortOrder
    sent?: SortOrderInput | SortOrder
    sent_at?: SortOrderInput | SortOrder
    type?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: vouchersCountOrderByAggregateInput
    _avg?: vouchersAvgOrderByAggregateInput
    _max?: vouchersMaxOrderByAggregateInput
    _min?: vouchersMinOrderByAggregateInput
    _sum?: vouchersSumOrderByAggregateInput
  }

  export type vouchersScalarWhereWithAggregatesInput = {
    AND?: vouchersScalarWhereWithAggregatesInput | vouchersScalarWhereWithAggregatesInput[]
    OR?: vouchersScalarWhereWithAggregatesInput[]
    NOT?: vouchersScalarWhereWithAggregatesInput | vouchersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"vouchers"> | string
    code?: StringWithAggregatesFilter<"vouchers"> | string
    is_redeemed?: BoolNullableWithAggregatesFilter<"vouchers"> | boolean | null
    redeemed_at?: DateTimeNullableWithAggregatesFilter<"vouchers"> | Date | string | null
    customer_id?: UuidNullableWithAggregatesFilter<"vouchers"> | string | null
    vendor_id?: UuidNullableWithAggregatesFilter<"vouchers"> | string | null
    sent?: BoolNullableWithAggregatesFilter<"vouchers"> | boolean | null
    sent_at?: DateTimeNullableWithAggregatesFilter<"vouchers"> | Date | string | null
    type?: StringWithAggregatesFilter<"vouchers"> | string
    value?: IntWithAggregatesFilter<"vouchers"> | number
    description?: StringNullableWithAggregatesFilter<"vouchers"> | string | null
  }

  export type customersCreateInput = {
    id?: string
    phone_number: string
    created_at?: Date | string | null
    vouchers?: vouchersCreateNestedManyWithoutCustomersInput
  }

  export type customersUncheckedCreateInput = {
    id?: string
    phone_number: string
    created_at?: Date | string | null
    vouchers?: vouchersUncheckedCreateNestedManyWithoutCustomersInput
  }

  export type customersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vouchers?: vouchersUpdateManyWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vouchers?: vouchersUncheckedUpdateManyWithoutCustomersNestedInput
  }

  export type customersCreateManyInput = {
    id?: string
    phone_number: string
    created_at?: Date | string | null
  }

  export type customersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type customersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vendorsCreateInput = {
    id?: string
    name: string
    phone_number?: string | null
    created_at?: Date | string | null
    vouchers?: vouchersCreateNestedManyWithoutVendorsInput
  }

  export type vendorsUncheckedCreateInput = {
    id?: string
    name: string
    phone_number?: string | null
    created_at?: Date | string | null
    vouchers?: vouchersUncheckedCreateNestedManyWithoutVendorsInput
  }

  export type vendorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vouchers?: vouchersUpdateManyWithoutVendorsNestedInput
  }

  export type vendorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vouchers?: vouchersUncheckedUpdateManyWithoutVendorsNestedInput
  }

  export type vendorsCreateManyInput = {
    id?: string
    name: string
    phone_number?: string | null
    created_at?: Date | string | null
  }

  export type vendorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vendorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type voucher_logsCreateInput = {
    id?: string
    status?: string | null
    message?: string | null
    created_at?: Date | string | null
    vouchers?: vouchersCreateNestedOneWithoutVoucher_logsInput
  }

  export type voucher_logsUncheckedCreateInput = {
    id?: string
    voucher_id?: string | null
    status?: string | null
    message?: string | null
    created_at?: Date | string | null
  }

  export type voucher_logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vouchers?: vouchersUpdateOneWithoutVoucher_logsNestedInput
  }

  export type voucher_logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucher_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type voucher_logsCreateManyInput = {
    id?: string
    voucher_id?: string | null
    status?: string | null
    message?: string | null
    created_at?: Date | string | null
  }

  export type voucher_logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type voucher_logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucher_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vouchersCreateInput = {
    id?: string
    code: string
    is_redeemed?: boolean | null
    redeemed_at?: Date | string | null
    sent?: boolean | null
    sent_at?: Date | string | null
    type?: string
    value?: number
    description?: string | null
    voucher_logs?: voucher_logsCreateNestedManyWithoutVouchersInput
    customers?: customersCreateNestedOneWithoutVouchersInput
    vendors?: vendorsCreateNestedOneWithoutVouchersInput
  }

  export type vouchersUncheckedCreateInput = {
    id?: string
    code: string
    is_redeemed?: boolean | null
    redeemed_at?: Date | string | null
    customer_id?: string | null
    vendor_id?: string | null
    sent?: boolean | null
    sent_at?: Date | string | null
    type?: string
    value?: number
    description?: string | null
    voucher_logs?: voucher_logsUncheckedCreateNestedManyWithoutVouchersInput
  }

  export type vouchersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    is_redeemed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redeemed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_logs?: voucher_logsUpdateManyWithoutVouchersNestedInput
    customers?: customersUpdateOneWithoutVouchersNestedInput
    vendors?: vendorsUpdateOneWithoutVouchersNestedInput
  }

  export type vouchersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    is_redeemed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redeemed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    vendor_id?: NullableStringFieldUpdateOperationsInput | string | null
    sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_logs?: voucher_logsUncheckedUpdateManyWithoutVouchersNestedInput
  }

  export type vouchersCreateManyInput = {
    id?: string
    code: string
    is_redeemed?: boolean | null
    redeemed_at?: Date | string | null
    customer_id?: string | null
    vendor_id?: string | null
    sent?: boolean | null
    sent_at?: Date | string | null
    type?: string
    value?: number
    description?: string | null
  }

  export type vouchersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    is_redeemed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redeemed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vouchersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    is_redeemed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redeemed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    vendor_id?: NullableStringFieldUpdateOperationsInput | string | null
    sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type VouchersListRelationFilter = {
    every?: vouchersWhereInput
    some?: vouchersWhereInput
    none?: vouchersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type vouchersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customersCountOrderByAggregateInput = {
    id?: SortOrder
    phone_number?: SortOrder
    created_at?: SortOrder
  }

  export type customersMaxOrderByAggregateInput = {
    id?: SortOrder
    phone_number?: SortOrder
    created_at?: SortOrder
  }

  export type customersMinOrderByAggregateInput = {
    id?: SortOrder
    phone_number?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type vendorsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    created_at?: SortOrder
  }

  export type vendorsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    created_at?: SortOrder
  }

  export type vendorsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    created_at?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type VouchersNullableScalarRelationFilter = {
    is?: vouchersWhereInput | null
    isNot?: vouchersWhereInput | null
  }

  export type voucher_logsCountOrderByAggregateInput = {
    id?: SortOrder
    voucher_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type voucher_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    voucher_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type voucher_logsMinOrderByAggregateInput = {
    id?: SortOrder
    voucher_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Voucher_logsListRelationFilter = {
    every?: voucher_logsWhereInput
    some?: voucher_logsWhereInput
    none?: voucher_logsWhereInput
  }

  export type CustomersNullableScalarRelationFilter = {
    is?: customersWhereInput | null
    isNot?: customersWhereInput | null
  }

  export type VendorsNullableScalarRelationFilter = {
    is?: vendorsWhereInput | null
    isNot?: vendorsWhereInput | null
  }

  export type voucher_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type vouchersCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    is_redeemed?: SortOrder
    redeemed_at?: SortOrder
    customer_id?: SortOrder
    vendor_id?: SortOrder
    sent?: SortOrder
    sent_at?: SortOrder
    type?: SortOrder
    value?: SortOrder
    description?: SortOrder
  }

  export type vouchersAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type vouchersMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    is_redeemed?: SortOrder
    redeemed_at?: SortOrder
    customer_id?: SortOrder
    vendor_id?: SortOrder
    sent?: SortOrder
    sent_at?: SortOrder
    type?: SortOrder
    value?: SortOrder
    description?: SortOrder
  }

  export type vouchersMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    is_redeemed?: SortOrder
    redeemed_at?: SortOrder
    customer_id?: SortOrder
    vendor_id?: SortOrder
    sent?: SortOrder
    sent_at?: SortOrder
    type?: SortOrder
    value?: SortOrder
    description?: SortOrder
  }

  export type vouchersSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type vouchersCreateNestedManyWithoutCustomersInput = {
    create?: XOR<vouchersCreateWithoutCustomersInput, vouchersUncheckedCreateWithoutCustomersInput> | vouchersCreateWithoutCustomersInput[] | vouchersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: vouchersCreateOrConnectWithoutCustomersInput | vouchersCreateOrConnectWithoutCustomersInput[]
    createMany?: vouchersCreateManyCustomersInputEnvelope
    connect?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
  }

  export type vouchersUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: XOR<vouchersCreateWithoutCustomersInput, vouchersUncheckedCreateWithoutCustomersInput> | vouchersCreateWithoutCustomersInput[] | vouchersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: vouchersCreateOrConnectWithoutCustomersInput | vouchersCreateOrConnectWithoutCustomersInput[]
    createMany?: vouchersCreateManyCustomersInputEnvelope
    connect?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type vouchersUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<vouchersCreateWithoutCustomersInput, vouchersUncheckedCreateWithoutCustomersInput> | vouchersCreateWithoutCustomersInput[] | vouchersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: vouchersCreateOrConnectWithoutCustomersInput | vouchersCreateOrConnectWithoutCustomersInput[]
    upsert?: vouchersUpsertWithWhereUniqueWithoutCustomersInput | vouchersUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: vouchersCreateManyCustomersInputEnvelope
    set?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    disconnect?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    delete?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    connect?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    update?: vouchersUpdateWithWhereUniqueWithoutCustomersInput | vouchersUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: vouchersUpdateManyWithWhereWithoutCustomersInput | vouchersUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: vouchersScalarWhereInput | vouchersScalarWhereInput[]
  }

  export type vouchersUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<vouchersCreateWithoutCustomersInput, vouchersUncheckedCreateWithoutCustomersInput> | vouchersCreateWithoutCustomersInput[] | vouchersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: vouchersCreateOrConnectWithoutCustomersInput | vouchersCreateOrConnectWithoutCustomersInput[]
    upsert?: vouchersUpsertWithWhereUniqueWithoutCustomersInput | vouchersUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: vouchersCreateManyCustomersInputEnvelope
    set?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    disconnect?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    delete?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    connect?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    update?: vouchersUpdateWithWhereUniqueWithoutCustomersInput | vouchersUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: vouchersUpdateManyWithWhereWithoutCustomersInput | vouchersUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: vouchersScalarWhereInput | vouchersScalarWhereInput[]
  }

  export type vouchersCreateNestedManyWithoutVendorsInput = {
    create?: XOR<vouchersCreateWithoutVendorsInput, vouchersUncheckedCreateWithoutVendorsInput> | vouchersCreateWithoutVendorsInput[] | vouchersUncheckedCreateWithoutVendorsInput[]
    connectOrCreate?: vouchersCreateOrConnectWithoutVendorsInput | vouchersCreateOrConnectWithoutVendorsInput[]
    createMany?: vouchersCreateManyVendorsInputEnvelope
    connect?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
  }

  export type vouchersUncheckedCreateNestedManyWithoutVendorsInput = {
    create?: XOR<vouchersCreateWithoutVendorsInput, vouchersUncheckedCreateWithoutVendorsInput> | vouchersCreateWithoutVendorsInput[] | vouchersUncheckedCreateWithoutVendorsInput[]
    connectOrCreate?: vouchersCreateOrConnectWithoutVendorsInput | vouchersCreateOrConnectWithoutVendorsInput[]
    createMany?: vouchersCreateManyVendorsInputEnvelope
    connect?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type vouchersUpdateManyWithoutVendorsNestedInput = {
    create?: XOR<vouchersCreateWithoutVendorsInput, vouchersUncheckedCreateWithoutVendorsInput> | vouchersCreateWithoutVendorsInput[] | vouchersUncheckedCreateWithoutVendorsInput[]
    connectOrCreate?: vouchersCreateOrConnectWithoutVendorsInput | vouchersCreateOrConnectWithoutVendorsInput[]
    upsert?: vouchersUpsertWithWhereUniqueWithoutVendorsInput | vouchersUpsertWithWhereUniqueWithoutVendorsInput[]
    createMany?: vouchersCreateManyVendorsInputEnvelope
    set?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    disconnect?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    delete?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    connect?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    update?: vouchersUpdateWithWhereUniqueWithoutVendorsInput | vouchersUpdateWithWhereUniqueWithoutVendorsInput[]
    updateMany?: vouchersUpdateManyWithWhereWithoutVendorsInput | vouchersUpdateManyWithWhereWithoutVendorsInput[]
    deleteMany?: vouchersScalarWhereInput | vouchersScalarWhereInput[]
  }

  export type vouchersUncheckedUpdateManyWithoutVendorsNestedInput = {
    create?: XOR<vouchersCreateWithoutVendorsInput, vouchersUncheckedCreateWithoutVendorsInput> | vouchersCreateWithoutVendorsInput[] | vouchersUncheckedCreateWithoutVendorsInput[]
    connectOrCreate?: vouchersCreateOrConnectWithoutVendorsInput | vouchersCreateOrConnectWithoutVendorsInput[]
    upsert?: vouchersUpsertWithWhereUniqueWithoutVendorsInput | vouchersUpsertWithWhereUniqueWithoutVendorsInput[]
    createMany?: vouchersCreateManyVendorsInputEnvelope
    set?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    disconnect?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    delete?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    connect?: vouchersWhereUniqueInput | vouchersWhereUniqueInput[]
    update?: vouchersUpdateWithWhereUniqueWithoutVendorsInput | vouchersUpdateWithWhereUniqueWithoutVendorsInput[]
    updateMany?: vouchersUpdateManyWithWhereWithoutVendorsInput | vouchersUpdateManyWithWhereWithoutVendorsInput[]
    deleteMany?: vouchersScalarWhereInput | vouchersScalarWhereInput[]
  }

  export type vouchersCreateNestedOneWithoutVoucher_logsInput = {
    create?: XOR<vouchersCreateWithoutVoucher_logsInput, vouchersUncheckedCreateWithoutVoucher_logsInput>
    connectOrCreate?: vouchersCreateOrConnectWithoutVoucher_logsInput
    connect?: vouchersWhereUniqueInput
  }

  export type vouchersUpdateOneWithoutVoucher_logsNestedInput = {
    create?: XOR<vouchersCreateWithoutVoucher_logsInput, vouchersUncheckedCreateWithoutVoucher_logsInput>
    connectOrCreate?: vouchersCreateOrConnectWithoutVoucher_logsInput
    upsert?: vouchersUpsertWithoutVoucher_logsInput
    disconnect?: vouchersWhereInput | boolean
    delete?: vouchersWhereInput | boolean
    connect?: vouchersWhereUniqueInput
    update?: XOR<XOR<vouchersUpdateToOneWithWhereWithoutVoucher_logsInput, vouchersUpdateWithoutVoucher_logsInput>, vouchersUncheckedUpdateWithoutVoucher_logsInput>
  }

  export type voucher_logsCreateNestedManyWithoutVouchersInput = {
    create?: XOR<voucher_logsCreateWithoutVouchersInput, voucher_logsUncheckedCreateWithoutVouchersInput> | voucher_logsCreateWithoutVouchersInput[] | voucher_logsUncheckedCreateWithoutVouchersInput[]
    connectOrCreate?: voucher_logsCreateOrConnectWithoutVouchersInput | voucher_logsCreateOrConnectWithoutVouchersInput[]
    createMany?: voucher_logsCreateManyVouchersInputEnvelope
    connect?: voucher_logsWhereUniqueInput | voucher_logsWhereUniqueInput[]
  }

  export type customersCreateNestedOneWithoutVouchersInput = {
    create?: XOR<customersCreateWithoutVouchersInput, customersUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: customersCreateOrConnectWithoutVouchersInput
    connect?: customersWhereUniqueInput
  }

  export type vendorsCreateNestedOneWithoutVouchersInput = {
    create?: XOR<vendorsCreateWithoutVouchersInput, vendorsUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: vendorsCreateOrConnectWithoutVouchersInput
    connect?: vendorsWhereUniqueInput
  }

  export type voucher_logsUncheckedCreateNestedManyWithoutVouchersInput = {
    create?: XOR<voucher_logsCreateWithoutVouchersInput, voucher_logsUncheckedCreateWithoutVouchersInput> | voucher_logsCreateWithoutVouchersInput[] | voucher_logsUncheckedCreateWithoutVouchersInput[]
    connectOrCreate?: voucher_logsCreateOrConnectWithoutVouchersInput | voucher_logsCreateOrConnectWithoutVouchersInput[]
    createMany?: voucher_logsCreateManyVouchersInputEnvelope
    connect?: voucher_logsWhereUniqueInput | voucher_logsWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type voucher_logsUpdateManyWithoutVouchersNestedInput = {
    create?: XOR<voucher_logsCreateWithoutVouchersInput, voucher_logsUncheckedCreateWithoutVouchersInput> | voucher_logsCreateWithoutVouchersInput[] | voucher_logsUncheckedCreateWithoutVouchersInput[]
    connectOrCreate?: voucher_logsCreateOrConnectWithoutVouchersInput | voucher_logsCreateOrConnectWithoutVouchersInput[]
    upsert?: voucher_logsUpsertWithWhereUniqueWithoutVouchersInput | voucher_logsUpsertWithWhereUniqueWithoutVouchersInput[]
    createMany?: voucher_logsCreateManyVouchersInputEnvelope
    set?: voucher_logsWhereUniqueInput | voucher_logsWhereUniqueInput[]
    disconnect?: voucher_logsWhereUniqueInput | voucher_logsWhereUniqueInput[]
    delete?: voucher_logsWhereUniqueInput | voucher_logsWhereUniqueInput[]
    connect?: voucher_logsWhereUniqueInput | voucher_logsWhereUniqueInput[]
    update?: voucher_logsUpdateWithWhereUniqueWithoutVouchersInput | voucher_logsUpdateWithWhereUniqueWithoutVouchersInput[]
    updateMany?: voucher_logsUpdateManyWithWhereWithoutVouchersInput | voucher_logsUpdateManyWithWhereWithoutVouchersInput[]
    deleteMany?: voucher_logsScalarWhereInput | voucher_logsScalarWhereInput[]
  }

  export type customersUpdateOneWithoutVouchersNestedInput = {
    create?: XOR<customersCreateWithoutVouchersInput, customersUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: customersCreateOrConnectWithoutVouchersInput
    upsert?: customersUpsertWithoutVouchersInput
    disconnect?: customersWhereInput | boolean
    delete?: customersWhereInput | boolean
    connect?: customersWhereUniqueInput
    update?: XOR<XOR<customersUpdateToOneWithWhereWithoutVouchersInput, customersUpdateWithoutVouchersInput>, customersUncheckedUpdateWithoutVouchersInput>
  }

  export type vendorsUpdateOneWithoutVouchersNestedInput = {
    create?: XOR<vendorsCreateWithoutVouchersInput, vendorsUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: vendorsCreateOrConnectWithoutVouchersInput
    upsert?: vendorsUpsertWithoutVouchersInput
    disconnect?: vendorsWhereInput | boolean
    delete?: vendorsWhereInput | boolean
    connect?: vendorsWhereUniqueInput
    update?: XOR<XOR<vendorsUpdateToOneWithWhereWithoutVouchersInput, vendorsUpdateWithoutVouchersInput>, vendorsUncheckedUpdateWithoutVouchersInput>
  }

  export type voucher_logsUncheckedUpdateManyWithoutVouchersNestedInput = {
    create?: XOR<voucher_logsCreateWithoutVouchersInput, voucher_logsUncheckedCreateWithoutVouchersInput> | voucher_logsCreateWithoutVouchersInput[] | voucher_logsUncheckedCreateWithoutVouchersInput[]
    connectOrCreate?: voucher_logsCreateOrConnectWithoutVouchersInput | voucher_logsCreateOrConnectWithoutVouchersInput[]
    upsert?: voucher_logsUpsertWithWhereUniqueWithoutVouchersInput | voucher_logsUpsertWithWhereUniqueWithoutVouchersInput[]
    createMany?: voucher_logsCreateManyVouchersInputEnvelope
    set?: voucher_logsWhereUniqueInput | voucher_logsWhereUniqueInput[]
    disconnect?: voucher_logsWhereUniqueInput | voucher_logsWhereUniqueInput[]
    delete?: voucher_logsWhereUniqueInput | voucher_logsWhereUniqueInput[]
    connect?: voucher_logsWhereUniqueInput | voucher_logsWhereUniqueInput[]
    update?: voucher_logsUpdateWithWhereUniqueWithoutVouchersInput | voucher_logsUpdateWithWhereUniqueWithoutVouchersInput[]
    updateMany?: voucher_logsUpdateManyWithWhereWithoutVouchersInput | voucher_logsUpdateManyWithWhereWithoutVouchersInput[]
    deleteMany?: voucher_logsScalarWhereInput | voucher_logsScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type vouchersCreateWithoutCustomersInput = {
    id?: string
    code: string
    is_redeemed?: boolean | null
    redeemed_at?: Date | string | null
    sent?: boolean | null
    sent_at?: Date | string | null
    type?: string
    value?: number
    description?: string | null
    voucher_logs?: voucher_logsCreateNestedManyWithoutVouchersInput
    vendors?: vendorsCreateNestedOneWithoutVouchersInput
  }

  export type vouchersUncheckedCreateWithoutCustomersInput = {
    id?: string
    code: string
    is_redeemed?: boolean | null
    redeemed_at?: Date | string | null
    vendor_id?: string | null
    sent?: boolean | null
    sent_at?: Date | string | null
    type?: string
    value?: number
    description?: string | null
    voucher_logs?: voucher_logsUncheckedCreateNestedManyWithoutVouchersInput
  }

  export type vouchersCreateOrConnectWithoutCustomersInput = {
    where: vouchersWhereUniqueInput
    create: XOR<vouchersCreateWithoutCustomersInput, vouchersUncheckedCreateWithoutCustomersInput>
  }

  export type vouchersCreateManyCustomersInputEnvelope = {
    data: vouchersCreateManyCustomersInput | vouchersCreateManyCustomersInput[]
    skipDuplicates?: boolean
  }

  export type vouchersUpsertWithWhereUniqueWithoutCustomersInput = {
    where: vouchersWhereUniqueInput
    update: XOR<vouchersUpdateWithoutCustomersInput, vouchersUncheckedUpdateWithoutCustomersInput>
    create: XOR<vouchersCreateWithoutCustomersInput, vouchersUncheckedCreateWithoutCustomersInput>
  }

  export type vouchersUpdateWithWhereUniqueWithoutCustomersInput = {
    where: vouchersWhereUniqueInput
    data: XOR<vouchersUpdateWithoutCustomersInput, vouchersUncheckedUpdateWithoutCustomersInput>
  }

  export type vouchersUpdateManyWithWhereWithoutCustomersInput = {
    where: vouchersScalarWhereInput
    data: XOR<vouchersUpdateManyMutationInput, vouchersUncheckedUpdateManyWithoutCustomersInput>
  }

  export type vouchersScalarWhereInput = {
    AND?: vouchersScalarWhereInput | vouchersScalarWhereInput[]
    OR?: vouchersScalarWhereInput[]
    NOT?: vouchersScalarWhereInput | vouchersScalarWhereInput[]
    id?: UuidFilter<"vouchers"> | string
    code?: StringFilter<"vouchers"> | string
    is_redeemed?: BoolNullableFilter<"vouchers"> | boolean | null
    redeemed_at?: DateTimeNullableFilter<"vouchers"> | Date | string | null
    customer_id?: UuidNullableFilter<"vouchers"> | string | null
    vendor_id?: UuidNullableFilter<"vouchers"> | string | null
    sent?: BoolNullableFilter<"vouchers"> | boolean | null
    sent_at?: DateTimeNullableFilter<"vouchers"> | Date | string | null
    type?: StringFilter<"vouchers"> | string
    value?: IntFilter<"vouchers"> | number
    description?: StringNullableFilter<"vouchers"> | string | null
  }

  export type vouchersCreateWithoutVendorsInput = {
    id?: string
    code: string
    is_redeemed?: boolean | null
    redeemed_at?: Date | string | null
    sent?: boolean | null
    sent_at?: Date | string | null
    type?: string
    value?: number
    description?: string | null
    voucher_logs?: voucher_logsCreateNestedManyWithoutVouchersInput
    customers?: customersCreateNestedOneWithoutVouchersInput
  }

  export type vouchersUncheckedCreateWithoutVendorsInput = {
    id?: string
    code: string
    is_redeemed?: boolean | null
    redeemed_at?: Date | string | null
    customer_id?: string | null
    sent?: boolean | null
    sent_at?: Date | string | null
    type?: string
    value?: number
    description?: string | null
    voucher_logs?: voucher_logsUncheckedCreateNestedManyWithoutVouchersInput
  }

  export type vouchersCreateOrConnectWithoutVendorsInput = {
    where: vouchersWhereUniqueInput
    create: XOR<vouchersCreateWithoutVendorsInput, vouchersUncheckedCreateWithoutVendorsInput>
  }

  export type vouchersCreateManyVendorsInputEnvelope = {
    data: vouchersCreateManyVendorsInput | vouchersCreateManyVendorsInput[]
    skipDuplicates?: boolean
  }

  export type vouchersUpsertWithWhereUniqueWithoutVendorsInput = {
    where: vouchersWhereUniqueInput
    update: XOR<vouchersUpdateWithoutVendorsInput, vouchersUncheckedUpdateWithoutVendorsInput>
    create: XOR<vouchersCreateWithoutVendorsInput, vouchersUncheckedCreateWithoutVendorsInput>
  }

  export type vouchersUpdateWithWhereUniqueWithoutVendorsInput = {
    where: vouchersWhereUniqueInput
    data: XOR<vouchersUpdateWithoutVendorsInput, vouchersUncheckedUpdateWithoutVendorsInput>
  }

  export type vouchersUpdateManyWithWhereWithoutVendorsInput = {
    where: vouchersScalarWhereInput
    data: XOR<vouchersUpdateManyMutationInput, vouchersUncheckedUpdateManyWithoutVendorsInput>
  }

  export type vouchersCreateWithoutVoucher_logsInput = {
    id?: string
    code: string
    is_redeemed?: boolean | null
    redeemed_at?: Date | string | null
    sent?: boolean | null
    sent_at?: Date | string | null
    type?: string
    value?: number
    description?: string | null
    customers?: customersCreateNestedOneWithoutVouchersInput
    vendors?: vendorsCreateNestedOneWithoutVouchersInput
  }

  export type vouchersUncheckedCreateWithoutVoucher_logsInput = {
    id?: string
    code: string
    is_redeemed?: boolean | null
    redeemed_at?: Date | string | null
    customer_id?: string | null
    vendor_id?: string | null
    sent?: boolean | null
    sent_at?: Date | string | null
    type?: string
    value?: number
    description?: string | null
  }

  export type vouchersCreateOrConnectWithoutVoucher_logsInput = {
    where: vouchersWhereUniqueInput
    create: XOR<vouchersCreateWithoutVoucher_logsInput, vouchersUncheckedCreateWithoutVoucher_logsInput>
  }

  export type vouchersUpsertWithoutVoucher_logsInput = {
    update: XOR<vouchersUpdateWithoutVoucher_logsInput, vouchersUncheckedUpdateWithoutVoucher_logsInput>
    create: XOR<vouchersCreateWithoutVoucher_logsInput, vouchersUncheckedCreateWithoutVoucher_logsInput>
    where?: vouchersWhereInput
  }

  export type vouchersUpdateToOneWithWhereWithoutVoucher_logsInput = {
    where?: vouchersWhereInput
    data: XOR<vouchersUpdateWithoutVoucher_logsInput, vouchersUncheckedUpdateWithoutVoucher_logsInput>
  }

  export type vouchersUpdateWithoutVoucher_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    is_redeemed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redeemed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: customersUpdateOneWithoutVouchersNestedInput
    vendors?: vendorsUpdateOneWithoutVouchersNestedInput
  }

  export type vouchersUncheckedUpdateWithoutVoucher_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    is_redeemed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redeemed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    vendor_id?: NullableStringFieldUpdateOperationsInput | string | null
    sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type voucher_logsCreateWithoutVouchersInput = {
    id?: string
    status?: string | null
    message?: string | null
    created_at?: Date | string | null
  }

  export type voucher_logsUncheckedCreateWithoutVouchersInput = {
    id?: string
    status?: string | null
    message?: string | null
    created_at?: Date | string | null
  }

  export type voucher_logsCreateOrConnectWithoutVouchersInput = {
    where: voucher_logsWhereUniqueInput
    create: XOR<voucher_logsCreateWithoutVouchersInput, voucher_logsUncheckedCreateWithoutVouchersInput>
  }

  export type voucher_logsCreateManyVouchersInputEnvelope = {
    data: voucher_logsCreateManyVouchersInput | voucher_logsCreateManyVouchersInput[]
    skipDuplicates?: boolean
  }

  export type customersCreateWithoutVouchersInput = {
    id?: string
    phone_number: string
    created_at?: Date | string | null
  }

  export type customersUncheckedCreateWithoutVouchersInput = {
    id?: string
    phone_number: string
    created_at?: Date | string | null
  }

  export type customersCreateOrConnectWithoutVouchersInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutVouchersInput, customersUncheckedCreateWithoutVouchersInput>
  }

  export type vendorsCreateWithoutVouchersInput = {
    id?: string
    name: string
    phone_number?: string | null
    created_at?: Date | string | null
  }

  export type vendorsUncheckedCreateWithoutVouchersInput = {
    id?: string
    name: string
    phone_number?: string | null
    created_at?: Date | string | null
  }

  export type vendorsCreateOrConnectWithoutVouchersInput = {
    where: vendorsWhereUniqueInput
    create: XOR<vendorsCreateWithoutVouchersInput, vendorsUncheckedCreateWithoutVouchersInput>
  }

  export type voucher_logsUpsertWithWhereUniqueWithoutVouchersInput = {
    where: voucher_logsWhereUniqueInput
    update: XOR<voucher_logsUpdateWithoutVouchersInput, voucher_logsUncheckedUpdateWithoutVouchersInput>
    create: XOR<voucher_logsCreateWithoutVouchersInput, voucher_logsUncheckedCreateWithoutVouchersInput>
  }

  export type voucher_logsUpdateWithWhereUniqueWithoutVouchersInput = {
    where: voucher_logsWhereUniqueInput
    data: XOR<voucher_logsUpdateWithoutVouchersInput, voucher_logsUncheckedUpdateWithoutVouchersInput>
  }

  export type voucher_logsUpdateManyWithWhereWithoutVouchersInput = {
    where: voucher_logsScalarWhereInput
    data: XOR<voucher_logsUpdateManyMutationInput, voucher_logsUncheckedUpdateManyWithoutVouchersInput>
  }

  export type voucher_logsScalarWhereInput = {
    AND?: voucher_logsScalarWhereInput | voucher_logsScalarWhereInput[]
    OR?: voucher_logsScalarWhereInput[]
    NOT?: voucher_logsScalarWhereInput | voucher_logsScalarWhereInput[]
    id?: UuidFilter<"voucher_logs"> | string
    voucher_id?: UuidNullableFilter<"voucher_logs"> | string | null
    status?: StringNullableFilter<"voucher_logs"> | string | null
    message?: StringNullableFilter<"voucher_logs"> | string | null
    created_at?: DateTimeNullableFilter<"voucher_logs"> | Date | string | null
  }

  export type customersUpsertWithoutVouchersInput = {
    update: XOR<customersUpdateWithoutVouchersInput, customersUncheckedUpdateWithoutVouchersInput>
    create: XOR<customersCreateWithoutVouchersInput, customersUncheckedCreateWithoutVouchersInput>
    where?: customersWhereInput
  }

  export type customersUpdateToOneWithWhereWithoutVouchersInput = {
    where?: customersWhereInput
    data: XOR<customersUpdateWithoutVouchersInput, customersUncheckedUpdateWithoutVouchersInput>
  }

  export type customersUpdateWithoutVouchersInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type customersUncheckedUpdateWithoutVouchersInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vendorsUpsertWithoutVouchersInput = {
    update: XOR<vendorsUpdateWithoutVouchersInput, vendorsUncheckedUpdateWithoutVouchersInput>
    create: XOR<vendorsCreateWithoutVouchersInput, vendorsUncheckedCreateWithoutVouchersInput>
    where?: vendorsWhereInput
  }

  export type vendorsUpdateToOneWithWhereWithoutVouchersInput = {
    where?: vendorsWhereInput
    data: XOR<vendorsUpdateWithoutVouchersInput, vendorsUncheckedUpdateWithoutVouchersInput>
  }

  export type vendorsUpdateWithoutVouchersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vendorsUncheckedUpdateWithoutVouchersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vouchersCreateManyCustomersInput = {
    id?: string
    code: string
    is_redeemed?: boolean | null
    redeemed_at?: Date | string | null
    vendor_id?: string | null
    sent?: boolean | null
    sent_at?: Date | string | null
    type?: string
    value?: number
    description?: string | null
  }

  export type vouchersUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    is_redeemed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redeemed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_logs?: voucher_logsUpdateManyWithoutVouchersNestedInput
    vendors?: vendorsUpdateOneWithoutVouchersNestedInput
  }

  export type vouchersUncheckedUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    is_redeemed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redeemed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendor_id?: NullableStringFieldUpdateOperationsInput | string | null
    sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_logs?: voucher_logsUncheckedUpdateManyWithoutVouchersNestedInput
  }

  export type vouchersUncheckedUpdateManyWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    is_redeemed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redeemed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendor_id?: NullableStringFieldUpdateOperationsInput | string | null
    sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vouchersCreateManyVendorsInput = {
    id?: string
    code: string
    is_redeemed?: boolean | null
    redeemed_at?: Date | string | null
    customer_id?: string | null
    sent?: boolean | null
    sent_at?: Date | string | null
    type?: string
    value?: number
    description?: string | null
  }

  export type vouchersUpdateWithoutVendorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    is_redeemed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redeemed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_logs?: voucher_logsUpdateManyWithoutVouchersNestedInput
    customers?: customersUpdateOneWithoutVouchersNestedInput
  }

  export type vouchersUncheckedUpdateWithoutVendorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    is_redeemed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redeemed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_logs?: voucher_logsUncheckedUpdateManyWithoutVouchersNestedInput
  }

  export type vouchersUncheckedUpdateManyWithoutVendorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    is_redeemed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redeemed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type voucher_logsCreateManyVouchersInput = {
    id?: string
    status?: string | null
    message?: string | null
    created_at?: Date | string | null
  }

  export type voucher_logsUpdateWithoutVouchersInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type voucher_logsUncheckedUpdateWithoutVouchersInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type voucher_logsUncheckedUpdateManyWithoutVouchersInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}