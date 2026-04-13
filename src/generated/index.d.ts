
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Technicien
 * 
 */
export type Technicien = $Result.DefaultSelection<Prisma.$TechnicienPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Analyse
 * 
 */
export type Analyse = $Result.DefaultSelection<Prisma.$AnalysePayload>
/**
 * Model Prelevement
 * 
 */
export type Prelevement = $Result.DefaultSelection<Prisma.$PrelevementPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Statut: {
  EN_ATTENTE: 'EN_ATTENTE',
  EN_COURS: 'EN_COURS',
  TERMINE: 'TERMINE'
};

export type Statut = (typeof Statut)[keyof typeof Statut]

}

export type Statut = $Enums.Statut

export const Statut: typeof $Enums.Statut

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Techniciens
 * const techniciens = await prisma.technicien.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Techniciens
   * const techniciens = await prisma.technicien.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.technicien`: Exposes CRUD operations for the **Technicien** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Techniciens
    * const techniciens = await prisma.technicien.findMany()
    * ```
    */
  get technicien(): Prisma.TechnicienDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analyse`: Exposes CRUD operations for the **Analyse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Analyses
    * const analyses = await prisma.analyse.findMany()
    * ```
    */
  get analyse(): Prisma.AnalyseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prelevement`: Exposes CRUD operations for the **Prelevement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prelevements
    * const prelevements = await prisma.prelevement.findMany()
    * ```
    */
  get prelevement(): Prisma.PrelevementDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Technicien: 'Technicien',
    Patient: 'Patient',
    Analyse: 'Analyse',
    Prelevement: 'Prelevement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "technicien" | "patient" | "analyse" | "prelevement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Technicien: {
        payload: Prisma.$TechnicienPayload<ExtArgs>
        fields: Prisma.TechnicienFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TechnicienFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicienPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TechnicienFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicienPayload>
          }
          findFirst: {
            args: Prisma.TechnicienFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicienPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TechnicienFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicienPayload>
          }
          findMany: {
            args: Prisma.TechnicienFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicienPayload>[]
          }
          create: {
            args: Prisma.TechnicienCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicienPayload>
          }
          createMany: {
            args: Prisma.TechnicienCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TechnicienCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicienPayload>[]
          }
          delete: {
            args: Prisma.TechnicienDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicienPayload>
          }
          update: {
            args: Prisma.TechnicienUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicienPayload>
          }
          deleteMany: {
            args: Prisma.TechnicienDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TechnicienUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TechnicienUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicienPayload>[]
          }
          upsert: {
            args: Prisma.TechnicienUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicienPayload>
          }
          aggregate: {
            args: Prisma.TechnicienAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTechnicien>
          }
          groupBy: {
            args: Prisma.TechnicienGroupByArgs<ExtArgs>
            result: $Utils.Optional<TechnicienGroupByOutputType>[]
          }
          count: {
            args: Prisma.TechnicienCountArgs<ExtArgs>
            result: $Utils.Optional<TechnicienCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Analyse: {
        payload: Prisma.$AnalysePayload<ExtArgs>
        fields: Prisma.AnalyseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysePayload>
          }
          findFirst: {
            args: Prisma.AnalyseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysePayload>
          }
          findMany: {
            args: Prisma.AnalyseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysePayload>[]
          }
          create: {
            args: Prisma.AnalyseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysePayload>
          }
          createMany: {
            args: Prisma.AnalyseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalyseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysePayload>[]
          }
          delete: {
            args: Prisma.AnalyseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysePayload>
          }
          update: {
            args: Prisma.AnalyseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysePayload>
          }
          deleteMany: {
            args: Prisma.AnalyseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalyseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysePayload>[]
          }
          upsert: {
            args: Prisma.AnalyseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysePayload>
          }
          aggregate: {
            args: Prisma.AnalyseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalyse>
          }
          groupBy: {
            args: Prisma.AnalyseGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyseGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyseCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyseCountAggregateOutputType> | number
          }
        }
      }
      Prelevement: {
        payload: Prisma.$PrelevementPayload<ExtArgs>
        fields: Prisma.PrelevementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrelevementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrelevementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrelevementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrelevementPayload>
          }
          findFirst: {
            args: Prisma.PrelevementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrelevementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrelevementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrelevementPayload>
          }
          findMany: {
            args: Prisma.PrelevementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrelevementPayload>[]
          }
          create: {
            args: Prisma.PrelevementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrelevementPayload>
          }
          createMany: {
            args: Prisma.PrelevementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrelevementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrelevementPayload>[]
          }
          delete: {
            args: Prisma.PrelevementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrelevementPayload>
          }
          update: {
            args: Prisma.PrelevementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrelevementPayload>
          }
          deleteMany: {
            args: Prisma.PrelevementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrelevementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrelevementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrelevementPayload>[]
          }
          upsert: {
            args: Prisma.PrelevementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrelevementPayload>
          }
          aggregate: {
            args: Prisma.PrelevementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrelevement>
          }
          groupBy: {
            args: Prisma.PrelevementGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrelevementGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrelevementCountArgs<ExtArgs>
            result: $Utils.Optional<PrelevementCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    technicien?: TechnicienOmit
    patient?: PatientOmit
    analyse?: AnalyseOmit
    prelevement?: PrelevementOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type TechnicienCountOutputType
   */

  export type TechnicienCountOutputType = {
    prelevements: number
  }

  export type TechnicienCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prelevements?: boolean | TechnicienCountOutputTypeCountPrelevementsArgs
  }

  // Custom InputTypes
  /**
   * TechnicienCountOutputType without action
   */
  export type TechnicienCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicienCountOutputType
     */
    select?: TechnicienCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TechnicienCountOutputType without action
   */
  export type TechnicienCountOutputTypeCountPrelevementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrelevementWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    prelevements: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prelevements?: boolean | PatientCountOutputTypeCountPrelevementsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountPrelevementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrelevementWhereInput
  }


  /**
   * Count Type AnalyseCountOutputType
   */

  export type AnalyseCountOutputType = {
    prelevements: number
  }

  export type AnalyseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prelevements?: boolean | AnalyseCountOutputTypeCountPrelevementsArgs
  }

  // Custom InputTypes
  /**
   * AnalyseCountOutputType without action
   */
  export type AnalyseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyseCountOutputType
     */
    select?: AnalyseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnalyseCountOutputType without action
   */
  export type AnalyseCountOutputTypeCountPrelevementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrelevementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Technicien
   */

  export type AggregateTechnicien = {
    _count: TechnicienCountAggregateOutputType | null
    _avg: TechnicienAvgAggregateOutputType | null
    _sum: TechnicienSumAggregateOutputType | null
    _min: TechnicienMinAggregateOutputType | null
    _max: TechnicienMaxAggregateOutputType | null
  }

  export type TechnicienAvgAggregateOutputType = {
    id: number | null
  }

  export type TechnicienSumAggregateOutputType = {
    id: number | null
  }

  export type TechnicienMinAggregateOutputType = {
    id: number | null
    prenom: string | null
    nom: string | null
    email: string | null
    telephone: string | null
    qualification: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TechnicienMaxAggregateOutputType = {
    id: number | null
    prenom: string | null
    nom: string | null
    email: string | null
    telephone: string | null
    qualification: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TechnicienCountAggregateOutputType = {
    id: number
    prenom: number
    nom: number
    email: number
    telephone: number
    qualification: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type TechnicienAvgAggregateInputType = {
    id?: true
  }

  export type TechnicienSumAggregateInputType = {
    id?: true
  }

  export type TechnicienMinAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    email?: true
    telephone?: true
    qualification?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TechnicienMaxAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    email?: true
    telephone?: true
    qualification?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TechnicienCountAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    email?: true
    telephone?: true
    qualification?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TechnicienAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Technicien to aggregate.
     */
    where?: TechnicienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Techniciens to fetch.
     */
    orderBy?: TechnicienOrderByWithRelationInput | TechnicienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TechnicienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Techniciens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Techniciens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Techniciens
    **/
    _count?: true | TechnicienCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TechnicienAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TechnicienSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechnicienMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechnicienMaxAggregateInputType
  }

  export type GetTechnicienAggregateType<T extends TechnicienAggregateArgs> = {
        [P in keyof T & keyof AggregateTechnicien]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechnicien[P]>
      : GetScalarType<T[P], AggregateTechnicien[P]>
  }




  export type TechnicienGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechnicienWhereInput
    orderBy?: TechnicienOrderByWithAggregationInput | TechnicienOrderByWithAggregationInput[]
    by: TechnicienScalarFieldEnum[] | TechnicienScalarFieldEnum
    having?: TechnicienScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechnicienCountAggregateInputType | true
    _avg?: TechnicienAvgAggregateInputType
    _sum?: TechnicienSumAggregateInputType
    _min?: TechnicienMinAggregateInputType
    _max?: TechnicienMaxAggregateInputType
  }

  export type TechnicienGroupByOutputType = {
    id: number
    prenom: string
    nom: string
    email: string
    telephone: string | null
    qualification: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: TechnicienCountAggregateOutputType | null
    _avg: TechnicienAvgAggregateOutputType | null
    _sum: TechnicienSumAggregateOutputType | null
    _min: TechnicienMinAggregateOutputType | null
    _max: TechnicienMaxAggregateOutputType | null
  }

  type GetTechnicienGroupByPayload<T extends TechnicienGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechnicienGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechnicienGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechnicienGroupByOutputType[P]>
            : GetScalarType<T[P], TechnicienGroupByOutputType[P]>
        }
      >
    >


  export type TechnicienSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prenom?: boolean
    nom?: boolean
    email?: boolean
    telephone?: boolean
    qualification?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    prelevements?: boolean | Technicien$prelevementsArgs<ExtArgs>
    _count?: boolean | TechnicienCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["technicien"]>

  export type TechnicienSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prenom?: boolean
    nom?: boolean
    email?: boolean
    telephone?: boolean
    qualification?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["technicien"]>

  export type TechnicienSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prenom?: boolean
    nom?: boolean
    email?: boolean
    telephone?: boolean
    qualification?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["technicien"]>

  export type TechnicienSelectScalar = {
    id?: boolean
    prenom?: boolean
    nom?: boolean
    email?: boolean
    telephone?: boolean
    qualification?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type TechnicienOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prenom" | "nom" | "email" | "telephone" | "qualification" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["technicien"]>
  export type TechnicienInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prelevements?: boolean | Technicien$prelevementsArgs<ExtArgs>
    _count?: boolean | TechnicienCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TechnicienIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TechnicienIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TechnicienPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Technicien"
    objects: {
      prelevements: Prisma.$PrelevementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      prenom: string
      nom: string
      email: string
      telephone: string | null
      qualification: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["technicien"]>
    composites: {}
  }

  type TechnicienGetPayload<S extends boolean | null | undefined | TechnicienDefaultArgs> = $Result.GetResult<Prisma.$TechnicienPayload, S>

  type TechnicienCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TechnicienFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TechnicienCountAggregateInputType | true
    }

  export interface TechnicienDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Technicien'], meta: { name: 'Technicien' } }
    /**
     * Find zero or one Technicien that matches the filter.
     * @param {TechnicienFindUniqueArgs} args - Arguments to find a Technicien
     * @example
     * // Get one Technicien
     * const technicien = await prisma.technicien.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TechnicienFindUniqueArgs>(args: SelectSubset<T, TechnicienFindUniqueArgs<ExtArgs>>): Prisma__TechnicienClient<$Result.GetResult<Prisma.$TechnicienPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Technicien that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TechnicienFindUniqueOrThrowArgs} args - Arguments to find a Technicien
     * @example
     * // Get one Technicien
     * const technicien = await prisma.technicien.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TechnicienFindUniqueOrThrowArgs>(args: SelectSubset<T, TechnicienFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TechnicienClient<$Result.GetResult<Prisma.$TechnicienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Technicien that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicienFindFirstArgs} args - Arguments to find a Technicien
     * @example
     * // Get one Technicien
     * const technicien = await prisma.technicien.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TechnicienFindFirstArgs>(args?: SelectSubset<T, TechnicienFindFirstArgs<ExtArgs>>): Prisma__TechnicienClient<$Result.GetResult<Prisma.$TechnicienPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Technicien that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicienFindFirstOrThrowArgs} args - Arguments to find a Technicien
     * @example
     * // Get one Technicien
     * const technicien = await prisma.technicien.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TechnicienFindFirstOrThrowArgs>(args?: SelectSubset<T, TechnicienFindFirstOrThrowArgs<ExtArgs>>): Prisma__TechnicienClient<$Result.GetResult<Prisma.$TechnicienPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Techniciens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicienFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Techniciens
     * const techniciens = await prisma.technicien.findMany()
     * 
     * // Get first 10 Techniciens
     * const techniciens = await prisma.technicien.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const technicienWithIdOnly = await prisma.technicien.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TechnicienFindManyArgs>(args?: SelectSubset<T, TechnicienFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Technicien.
     * @param {TechnicienCreateArgs} args - Arguments to create a Technicien.
     * @example
     * // Create one Technicien
     * const Technicien = await prisma.technicien.create({
     *   data: {
     *     // ... data to create a Technicien
     *   }
     * })
     * 
     */
    create<T extends TechnicienCreateArgs>(args: SelectSubset<T, TechnicienCreateArgs<ExtArgs>>): Prisma__TechnicienClient<$Result.GetResult<Prisma.$TechnicienPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Techniciens.
     * @param {TechnicienCreateManyArgs} args - Arguments to create many Techniciens.
     * @example
     * // Create many Techniciens
     * const technicien = await prisma.technicien.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TechnicienCreateManyArgs>(args?: SelectSubset<T, TechnicienCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Techniciens and returns the data saved in the database.
     * @param {TechnicienCreateManyAndReturnArgs} args - Arguments to create many Techniciens.
     * @example
     * // Create many Techniciens
     * const technicien = await prisma.technicien.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Techniciens and only return the `id`
     * const technicienWithIdOnly = await prisma.technicien.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TechnicienCreateManyAndReturnArgs>(args?: SelectSubset<T, TechnicienCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicienPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Technicien.
     * @param {TechnicienDeleteArgs} args - Arguments to delete one Technicien.
     * @example
     * // Delete one Technicien
     * const Technicien = await prisma.technicien.delete({
     *   where: {
     *     // ... filter to delete one Technicien
     *   }
     * })
     * 
     */
    delete<T extends TechnicienDeleteArgs>(args: SelectSubset<T, TechnicienDeleteArgs<ExtArgs>>): Prisma__TechnicienClient<$Result.GetResult<Prisma.$TechnicienPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Technicien.
     * @param {TechnicienUpdateArgs} args - Arguments to update one Technicien.
     * @example
     * // Update one Technicien
     * const technicien = await prisma.technicien.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TechnicienUpdateArgs>(args: SelectSubset<T, TechnicienUpdateArgs<ExtArgs>>): Prisma__TechnicienClient<$Result.GetResult<Prisma.$TechnicienPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Techniciens.
     * @param {TechnicienDeleteManyArgs} args - Arguments to filter Techniciens to delete.
     * @example
     * // Delete a few Techniciens
     * const { count } = await prisma.technicien.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TechnicienDeleteManyArgs>(args?: SelectSubset<T, TechnicienDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Techniciens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicienUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Techniciens
     * const technicien = await prisma.technicien.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TechnicienUpdateManyArgs>(args: SelectSubset<T, TechnicienUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Techniciens and returns the data updated in the database.
     * @param {TechnicienUpdateManyAndReturnArgs} args - Arguments to update many Techniciens.
     * @example
     * // Update many Techniciens
     * const technicien = await prisma.technicien.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Techniciens and only return the `id`
     * const technicienWithIdOnly = await prisma.technicien.updateManyAndReturn({
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
    updateManyAndReturn<T extends TechnicienUpdateManyAndReturnArgs>(args: SelectSubset<T, TechnicienUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicienPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Technicien.
     * @param {TechnicienUpsertArgs} args - Arguments to update or create a Technicien.
     * @example
     * // Update or create a Technicien
     * const technicien = await prisma.technicien.upsert({
     *   create: {
     *     // ... data to create a Technicien
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Technicien we want to update
     *   }
     * })
     */
    upsert<T extends TechnicienUpsertArgs>(args: SelectSubset<T, TechnicienUpsertArgs<ExtArgs>>): Prisma__TechnicienClient<$Result.GetResult<Prisma.$TechnicienPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Techniciens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicienCountArgs} args - Arguments to filter Techniciens to count.
     * @example
     * // Count the number of Techniciens
     * const count = await prisma.technicien.count({
     *   where: {
     *     // ... the filter for the Techniciens we want to count
     *   }
     * })
    **/
    count<T extends TechnicienCountArgs>(
      args?: Subset<T, TechnicienCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechnicienCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Technicien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicienAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TechnicienAggregateArgs>(args: Subset<T, TechnicienAggregateArgs>): Prisma.PrismaPromise<GetTechnicienAggregateType<T>>

    /**
     * Group by Technicien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicienGroupByArgs} args - Group by arguments.
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
      T extends TechnicienGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechnicienGroupByArgs['orderBy'] }
        : { orderBy?: TechnicienGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TechnicienGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechnicienGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Technicien model
   */
  readonly fields: TechnicienFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Technicien.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TechnicienClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prelevements<T extends Technicien$prelevementsArgs<ExtArgs> = {}>(args?: Subset<T, Technicien$prelevementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrelevementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Technicien model
   */
  interface TechnicienFieldRefs {
    readonly id: FieldRef<"Technicien", 'Int'>
    readonly prenom: FieldRef<"Technicien", 'String'>
    readonly nom: FieldRef<"Technicien", 'String'>
    readonly email: FieldRef<"Technicien", 'String'>
    readonly telephone: FieldRef<"Technicien", 'String'>
    readonly qualification: FieldRef<"Technicien", 'String'>
    readonly createdAt: FieldRef<"Technicien", 'DateTime'>
    readonly updatedAt: FieldRef<"Technicien", 'DateTime'>
    readonly deletedAt: FieldRef<"Technicien", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Technicien findUnique
   */
  export type TechnicienFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technicien
     */
    select?: TechnicienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technicien
     */
    omit?: TechnicienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicienInclude<ExtArgs> | null
    /**
     * Filter, which Technicien to fetch.
     */
    where: TechnicienWhereUniqueInput
  }

  /**
   * Technicien findUniqueOrThrow
   */
  export type TechnicienFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technicien
     */
    select?: TechnicienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technicien
     */
    omit?: TechnicienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicienInclude<ExtArgs> | null
    /**
     * Filter, which Technicien to fetch.
     */
    where: TechnicienWhereUniqueInput
  }

  /**
   * Technicien findFirst
   */
  export type TechnicienFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technicien
     */
    select?: TechnicienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technicien
     */
    omit?: TechnicienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicienInclude<ExtArgs> | null
    /**
     * Filter, which Technicien to fetch.
     */
    where?: TechnicienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Techniciens to fetch.
     */
    orderBy?: TechnicienOrderByWithRelationInput | TechnicienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Techniciens.
     */
    cursor?: TechnicienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Techniciens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Techniciens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Techniciens.
     */
    distinct?: TechnicienScalarFieldEnum | TechnicienScalarFieldEnum[]
  }

  /**
   * Technicien findFirstOrThrow
   */
  export type TechnicienFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technicien
     */
    select?: TechnicienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technicien
     */
    omit?: TechnicienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicienInclude<ExtArgs> | null
    /**
     * Filter, which Technicien to fetch.
     */
    where?: TechnicienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Techniciens to fetch.
     */
    orderBy?: TechnicienOrderByWithRelationInput | TechnicienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Techniciens.
     */
    cursor?: TechnicienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Techniciens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Techniciens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Techniciens.
     */
    distinct?: TechnicienScalarFieldEnum | TechnicienScalarFieldEnum[]
  }

  /**
   * Technicien findMany
   */
  export type TechnicienFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technicien
     */
    select?: TechnicienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technicien
     */
    omit?: TechnicienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicienInclude<ExtArgs> | null
    /**
     * Filter, which Techniciens to fetch.
     */
    where?: TechnicienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Techniciens to fetch.
     */
    orderBy?: TechnicienOrderByWithRelationInput | TechnicienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Techniciens.
     */
    cursor?: TechnicienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Techniciens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Techniciens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Techniciens.
     */
    distinct?: TechnicienScalarFieldEnum | TechnicienScalarFieldEnum[]
  }

  /**
   * Technicien create
   */
  export type TechnicienCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technicien
     */
    select?: TechnicienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technicien
     */
    omit?: TechnicienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicienInclude<ExtArgs> | null
    /**
     * The data needed to create a Technicien.
     */
    data: XOR<TechnicienCreateInput, TechnicienUncheckedCreateInput>
  }

  /**
   * Technicien createMany
   */
  export type TechnicienCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Techniciens.
     */
    data: TechnicienCreateManyInput | TechnicienCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Technicien createManyAndReturn
   */
  export type TechnicienCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technicien
     */
    select?: TechnicienSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Technicien
     */
    omit?: TechnicienOmit<ExtArgs> | null
    /**
     * The data used to create many Techniciens.
     */
    data: TechnicienCreateManyInput | TechnicienCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Technicien update
   */
  export type TechnicienUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technicien
     */
    select?: TechnicienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technicien
     */
    omit?: TechnicienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicienInclude<ExtArgs> | null
    /**
     * The data needed to update a Technicien.
     */
    data: XOR<TechnicienUpdateInput, TechnicienUncheckedUpdateInput>
    /**
     * Choose, which Technicien to update.
     */
    where: TechnicienWhereUniqueInput
  }

  /**
   * Technicien updateMany
   */
  export type TechnicienUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Techniciens.
     */
    data: XOR<TechnicienUpdateManyMutationInput, TechnicienUncheckedUpdateManyInput>
    /**
     * Filter which Techniciens to update
     */
    where?: TechnicienWhereInput
    /**
     * Limit how many Techniciens to update.
     */
    limit?: number
  }

  /**
   * Technicien updateManyAndReturn
   */
  export type TechnicienUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technicien
     */
    select?: TechnicienSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Technicien
     */
    omit?: TechnicienOmit<ExtArgs> | null
    /**
     * The data used to update Techniciens.
     */
    data: XOR<TechnicienUpdateManyMutationInput, TechnicienUncheckedUpdateManyInput>
    /**
     * Filter which Techniciens to update
     */
    where?: TechnicienWhereInput
    /**
     * Limit how many Techniciens to update.
     */
    limit?: number
  }

  /**
   * Technicien upsert
   */
  export type TechnicienUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technicien
     */
    select?: TechnicienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technicien
     */
    omit?: TechnicienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicienInclude<ExtArgs> | null
    /**
     * The filter to search for the Technicien to update in case it exists.
     */
    where: TechnicienWhereUniqueInput
    /**
     * In case the Technicien found by the `where` argument doesn't exist, create a new Technicien with this data.
     */
    create: XOR<TechnicienCreateInput, TechnicienUncheckedCreateInput>
    /**
     * In case the Technicien was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TechnicienUpdateInput, TechnicienUncheckedUpdateInput>
  }

  /**
   * Technicien delete
   */
  export type TechnicienDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technicien
     */
    select?: TechnicienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technicien
     */
    omit?: TechnicienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicienInclude<ExtArgs> | null
    /**
     * Filter which Technicien to delete.
     */
    where: TechnicienWhereUniqueInput
  }

  /**
   * Technicien deleteMany
   */
  export type TechnicienDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Techniciens to delete
     */
    where?: TechnicienWhereInput
    /**
     * Limit how many Techniciens to delete.
     */
    limit?: number
  }

  /**
   * Technicien.prelevements
   */
  export type Technicien$prelevementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prelevement
     */
    select?: PrelevementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prelevement
     */
    omit?: PrelevementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrelevementInclude<ExtArgs> | null
    where?: PrelevementWhereInput
    orderBy?: PrelevementOrderByWithRelationInput | PrelevementOrderByWithRelationInput[]
    cursor?: PrelevementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrelevementScalarFieldEnum | PrelevementScalarFieldEnum[]
  }

  /**
   * Technicien without action
   */
  export type TechnicienDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technicien
     */
    select?: TechnicienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technicien
     */
    omit?: TechnicienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicienInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    id: number | null
  }

  export type PatientSumAggregateOutputType = {
    id: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: number | null
    prenom: string | null
    nom: string | null
    dateNaissance: Date | null
    telephone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: number | null
    prenom: string | null
    nom: string | null
    dateNaissance: Date | null
    telephone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    prenom: number
    nom: number
    dateNaissance: number
    telephone: number
    email: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    id?: true
  }

  export type PatientSumAggregateInputType = {
    id?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    dateNaissance?: true
    telephone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    dateNaissance?: true
    telephone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    dateNaissance?: true
    telephone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: number
    prenom: string
    nom: string
    dateNaissance: Date
    telephone: string | null
    email: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prenom?: boolean
    nom?: boolean
    dateNaissance?: boolean
    telephone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    prelevements?: boolean | Patient$prelevementsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prenom?: boolean
    nom?: boolean
    dateNaissance?: boolean
    telephone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prenom?: boolean
    nom?: boolean
    dateNaissance?: boolean
    telephone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    prenom?: boolean
    nom?: boolean
    dateNaissance?: boolean
    telephone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prenom" | "nom" | "dateNaissance" | "telephone" | "email" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prelevements?: boolean | Patient$prelevementsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      prelevements: Prisma.$PrelevementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      prenom: string
      nom: string
      dateNaissance: Date
      telephone: string | null
      email: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
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
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prelevements<T extends Patient$prelevementsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$prelevementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrelevementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'Int'>
    readonly prenom: FieldRef<"Patient", 'String'>
    readonly nom: FieldRef<"Patient", 'String'>
    readonly dateNaissance: FieldRef<"Patient", 'DateTime'>
    readonly telephone: FieldRef<"Patient", 'String'>
    readonly email: FieldRef<"Patient", 'String'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
    readonly deletedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.prelevements
   */
  export type Patient$prelevementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prelevement
     */
    select?: PrelevementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prelevement
     */
    omit?: PrelevementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrelevementInclude<ExtArgs> | null
    where?: PrelevementWhereInput
    orderBy?: PrelevementOrderByWithRelationInput | PrelevementOrderByWithRelationInput[]
    cursor?: PrelevementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrelevementScalarFieldEnum | PrelevementScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Analyse
   */

  export type AggregateAnalyse = {
    _count: AnalyseCountAggregateOutputType | null
    _avg: AnalyseAvgAggregateOutputType | null
    _sum: AnalyseSumAggregateOutputType | null
    _min: AnalyseMinAggregateOutputType | null
    _max: AnalyseMaxAggregateOutputType | null
  }

  export type AnalyseAvgAggregateOutputType = {
    id: number | null
    prix: number | null
    delaiResultat: number | null
  }

  export type AnalyseSumAggregateOutputType = {
    id: number | null
    prix: number | null
    delaiResultat: number | null
  }

  export type AnalyseMinAggregateOutputType = {
    id: number | null
    code: string | null
    libelle: string | null
    prix: number | null
    delaiResultat: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AnalyseMaxAggregateOutputType = {
    id: number | null
    code: string | null
    libelle: string | null
    prix: number | null
    delaiResultat: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AnalyseCountAggregateOutputType = {
    id: number
    code: number
    libelle: number
    prix: number
    delaiResultat: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type AnalyseAvgAggregateInputType = {
    id?: true
    prix?: true
    delaiResultat?: true
  }

  export type AnalyseSumAggregateInputType = {
    id?: true
    prix?: true
    delaiResultat?: true
  }

  export type AnalyseMinAggregateInputType = {
    id?: true
    code?: true
    libelle?: true
    prix?: true
    delaiResultat?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AnalyseMaxAggregateInputType = {
    id?: true
    code?: true
    libelle?: true
    prix?: true
    delaiResultat?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AnalyseCountAggregateInputType = {
    id?: true
    code?: true
    libelle?: true
    prix?: true
    delaiResultat?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type AnalyseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analyse to aggregate.
     */
    where?: AnalyseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalyseOrderByWithRelationInput | AnalyseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Analyses
    **/
    _count?: true | AnalyseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalyseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalyseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyseMaxAggregateInputType
  }

  export type GetAnalyseAggregateType<T extends AnalyseAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalyse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalyse[P]>
      : GetScalarType<T[P], AggregateAnalyse[P]>
  }




  export type AnalyseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyseWhereInput
    orderBy?: AnalyseOrderByWithAggregationInput | AnalyseOrderByWithAggregationInput[]
    by: AnalyseScalarFieldEnum[] | AnalyseScalarFieldEnum
    having?: AnalyseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyseCountAggregateInputType | true
    _avg?: AnalyseAvgAggregateInputType
    _sum?: AnalyseSumAggregateInputType
    _min?: AnalyseMinAggregateInputType
    _max?: AnalyseMaxAggregateInputType
  }

  export type AnalyseGroupByOutputType = {
    id: number
    code: string
    libelle: string
    prix: number
    delaiResultat: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: AnalyseCountAggregateOutputType | null
    _avg: AnalyseAvgAggregateOutputType | null
    _sum: AnalyseSumAggregateOutputType | null
    _min: AnalyseMinAggregateOutputType | null
    _max: AnalyseMaxAggregateOutputType | null
  }

  type GetAnalyseGroupByPayload<T extends AnalyseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyseGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyseGroupByOutputType[P]>
        }
      >
    >


  export type AnalyseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    libelle?: boolean
    prix?: boolean
    delaiResultat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    prelevements?: boolean | Analyse$prelevementsArgs<ExtArgs>
    _count?: boolean | AnalyseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analyse"]>

  export type AnalyseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    libelle?: boolean
    prix?: boolean
    delaiResultat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["analyse"]>

  export type AnalyseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    libelle?: boolean
    prix?: boolean
    delaiResultat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["analyse"]>

  export type AnalyseSelectScalar = {
    id?: boolean
    code?: boolean
    libelle?: boolean
    prix?: boolean
    delaiResultat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type AnalyseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "libelle" | "prix" | "delaiResultat" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["analyse"]>
  export type AnalyseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prelevements?: boolean | Analyse$prelevementsArgs<ExtArgs>
    _count?: boolean | AnalyseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnalyseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AnalyseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AnalysePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Analyse"
    objects: {
      prelevements: Prisma.$PrelevementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      libelle: string
      prix: number
      delaiResultat: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["analyse"]>
    composites: {}
  }

  type AnalyseGetPayload<S extends boolean | null | undefined | AnalyseDefaultArgs> = $Result.GetResult<Prisma.$AnalysePayload, S>

  type AnalyseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalyseCountAggregateInputType | true
    }

  export interface AnalyseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Analyse'], meta: { name: 'Analyse' } }
    /**
     * Find zero or one Analyse that matches the filter.
     * @param {AnalyseFindUniqueArgs} args - Arguments to find a Analyse
     * @example
     * // Get one Analyse
     * const analyse = await prisma.analyse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyseFindUniqueArgs>(args: SelectSubset<T, AnalyseFindUniqueArgs<ExtArgs>>): Prisma__AnalyseClient<$Result.GetResult<Prisma.$AnalysePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Analyse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyseFindUniqueOrThrowArgs} args - Arguments to find a Analyse
     * @example
     * // Get one Analyse
     * const analyse = await prisma.analyse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyseFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyseClient<$Result.GetResult<Prisma.$AnalysePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analyse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyseFindFirstArgs} args - Arguments to find a Analyse
     * @example
     * // Get one Analyse
     * const analyse = await prisma.analyse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyseFindFirstArgs>(args?: SelectSubset<T, AnalyseFindFirstArgs<ExtArgs>>): Prisma__AnalyseClient<$Result.GetResult<Prisma.$AnalysePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analyse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyseFindFirstOrThrowArgs} args - Arguments to find a Analyse
     * @example
     * // Get one Analyse
     * const analyse = await prisma.analyse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyseFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyseFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyseClient<$Result.GetResult<Prisma.$AnalysePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Analyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analyses
     * const analyses = await prisma.analyse.findMany()
     * 
     * // Get first 10 Analyses
     * const analyses = await prisma.analyse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyseWithIdOnly = await prisma.analyse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyseFindManyArgs>(args?: SelectSubset<T, AnalyseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Analyse.
     * @param {AnalyseCreateArgs} args - Arguments to create a Analyse.
     * @example
     * // Create one Analyse
     * const Analyse = await prisma.analyse.create({
     *   data: {
     *     // ... data to create a Analyse
     *   }
     * })
     * 
     */
    create<T extends AnalyseCreateArgs>(args: SelectSubset<T, AnalyseCreateArgs<ExtArgs>>): Prisma__AnalyseClient<$Result.GetResult<Prisma.$AnalysePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Analyses.
     * @param {AnalyseCreateManyArgs} args - Arguments to create many Analyses.
     * @example
     * // Create many Analyses
     * const analyse = await prisma.analyse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyseCreateManyArgs>(args?: SelectSubset<T, AnalyseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Analyses and returns the data saved in the database.
     * @param {AnalyseCreateManyAndReturnArgs} args - Arguments to create many Analyses.
     * @example
     * // Create many Analyses
     * const analyse = await prisma.analyse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Analyses and only return the `id`
     * const analyseWithIdOnly = await prisma.analyse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalyseCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalyseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Analyse.
     * @param {AnalyseDeleteArgs} args - Arguments to delete one Analyse.
     * @example
     * // Delete one Analyse
     * const Analyse = await prisma.analyse.delete({
     *   where: {
     *     // ... filter to delete one Analyse
     *   }
     * })
     * 
     */
    delete<T extends AnalyseDeleteArgs>(args: SelectSubset<T, AnalyseDeleteArgs<ExtArgs>>): Prisma__AnalyseClient<$Result.GetResult<Prisma.$AnalysePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Analyse.
     * @param {AnalyseUpdateArgs} args - Arguments to update one Analyse.
     * @example
     * // Update one Analyse
     * const analyse = await prisma.analyse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyseUpdateArgs>(args: SelectSubset<T, AnalyseUpdateArgs<ExtArgs>>): Prisma__AnalyseClient<$Result.GetResult<Prisma.$AnalysePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Analyses.
     * @param {AnalyseDeleteManyArgs} args - Arguments to filter Analyses to delete.
     * @example
     * // Delete a few Analyses
     * const { count } = await prisma.analyse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyseDeleteManyArgs>(args?: SelectSubset<T, AnalyseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analyses
     * const analyse = await prisma.analyse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyseUpdateManyArgs>(args: SelectSubset<T, AnalyseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analyses and returns the data updated in the database.
     * @param {AnalyseUpdateManyAndReturnArgs} args - Arguments to update many Analyses.
     * @example
     * // Update many Analyses
     * const analyse = await prisma.analyse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Analyses and only return the `id`
     * const analyseWithIdOnly = await prisma.analyse.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnalyseUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalyseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Analyse.
     * @param {AnalyseUpsertArgs} args - Arguments to update or create a Analyse.
     * @example
     * // Update or create a Analyse
     * const analyse = await prisma.analyse.upsert({
     *   create: {
     *     // ... data to create a Analyse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analyse we want to update
     *   }
     * })
     */
    upsert<T extends AnalyseUpsertArgs>(args: SelectSubset<T, AnalyseUpsertArgs<ExtArgs>>): Prisma__AnalyseClient<$Result.GetResult<Prisma.$AnalysePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyseCountArgs} args - Arguments to filter Analyses to count.
     * @example
     * // Count the number of Analyses
     * const count = await prisma.analyse.count({
     *   where: {
     *     // ... the filter for the Analyses we want to count
     *   }
     * })
    **/
    count<T extends AnalyseCountArgs>(
      args?: Subset<T, AnalyseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Analyse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalyseAggregateArgs>(args: Subset<T, AnalyseAggregateArgs>): Prisma.PrismaPromise<GetAnalyseAggregateType<T>>

    /**
     * Group by Analyse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyseGroupByArgs} args - Group by arguments.
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
      T extends AnalyseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyseGroupByArgs['orderBy'] }
        : { orderBy?: AnalyseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalyseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Analyse model
   */
  readonly fields: AnalyseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Analyse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prelevements<T extends Analyse$prelevementsArgs<ExtArgs> = {}>(args?: Subset<T, Analyse$prelevementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrelevementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Analyse model
   */
  interface AnalyseFieldRefs {
    readonly id: FieldRef<"Analyse", 'Int'>
    readonly code: FieldRef<"Analyse", 'String'>
    readonly libelle: FieldRef<"Analyse", 'String'>
    readonly prix: FieldRef<"Analyse", 'Float'>
    readonly delaiResultat: FieldRef<"Analyse", 'Int'>
    readonly createdAt: FieldRef<"Analyse", 'DateTime'>
    readonly updatedAt: FieldRef<"Analyse", 'DateTime'>
    readonly deletedAt: FieldRef<"Analyse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Analyse findUnique
   */
  export type AnalyseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyse
     */
    select?: AnalyseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyse
     */
    omit?: AnalyseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyseInclude<ExtArgs> | null
    /**
     * Filter, which Analyse to fetch.
     */
    where: AnalyseWhereUniqueInput
  }

  /**
   * Analyse findUniqueOrThrow
   */
  export type AnalyseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyse
     */
    select?: AnalyseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyse
     */
    omit?: AnalyseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyseInclude<ExtArgs> | null
    /**
     * Filter, which Analyse to fetch.
     */
    where: AnalyseWhereUniqueInput
  }

  /**
   * Analyse findFirst
   */
  export type AnalyseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyse
     */
    select?: AnalyseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyse
     */
    omit?: AnalyseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyseInclude<ExtArgs> | null
    /**
     * Filter, which Analyse to fetch.
     */
    where?: AnalyseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalyseOrderByWithRelationInput | AnalyseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analyses.
     */
    cursor?: AnalyseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analyses.
     */
    distinct?: AnalyseScalarFieldEnum | AnalyseScalarFieldEnum[]
  }

  /**
   * Analyse findFirstOrThrow
   */
  export type AnalyseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyse
     */
    select?: AnalyseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyse
     */
    omit?: AnalyseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyseInclude<ExtArgs> | null
    /**
     * Filter, which Analyse to fetch.
     */
    where?: AnalyseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalyseOrderByWithRelationInput | AnalyseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analyses.
     */
    cursor?: AnalyseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analyses.
     */
    distinct?: AnalyseScalarFieldEnum | AnalyseScalarFieldEnum[]
  }

  /**
   * Analyse findMany
   */
  export type AnalyseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyse
     */
    select?: AnalyseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyse
     */
    omit?: AnalyseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyseInclude<ExtArgs> | null
    /**
     * Filter, which Analyses to fetch.
     */
    where?: AnalyseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalyseOrderByWithRelationInput | AnalyseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Analyses.
     */
    cursor?: AnalyseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analyses.
     */
    distinct?: AnalyseScalarFieldEnum | AnalyseScalarFieldEnum[]
  }

  /**
   * Analyse create
   */
  export type AnalyseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyse
     */
    select?: AnalyseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyse
     */
    omit?: AnalyseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyseInclude<ExtArgs> | null
    /**
     * The data needed to create a Analyse.
     */
    data: XOR<AnalyseCreateInput, AnalyseUncheckedCreateInput>
  }

  /**
   * Analyse createMany
   */
  export type AnalyseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Analyses.
     */
    data: AnalyseCreateManyInput | AnalyseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Analyse createManyAndReturn
   */
  export type AnalyseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyse
     */
    select?: AnalyseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analyse
     */
    omit?: AnalyseOmit<ExtArgs> | null
    /**
     * The data used to create many Analyses.
     */
    data: AnalyseCreateManyInput | AnalyseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Analyse update
   */
  export type AnalyseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyse
     */
    select?: AnalyseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyse
     */
    omit?: AnalyseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyseInclude<ExtArgs> | null
    /**
     * The data needed to update a Analyse.
     */
    data: XOR<AnalyseUpdateInput, AnalyseUncheckedUpdateInput>
    /**
     * Choose, which Analyse to update.
     */
    where: AnalyseWhereUniqueInput
  }

  /**
   * Analyse updateMany
   */
  export type AnalyseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Analyses.
     */
    data: XOR<AnalyseUpdateManyMutationInput, AnalyseUncheckedUpdateManyInput>
    /**
     * Filter which Analyses to update
     */
    where?: AnalyseWhereInput
    /**
     * Limit how many Analyses to update.
     */
    limit?: number
  }

  /**
   * Analyse updateManyAndReturn
   */
  export type AnalyseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyse
     */
    select?: AnalyseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analyse
     */
    omit?: AnalyseOmit<ExtArgs> | null
    /**
     * The data used to update Analyses.
     */
    data: XOR<AnalyseUpdateManyMutationInput, AnalyseUncheckedUpdateManyInput>
    /**
     * Filter which Analyses to update
     */
    where?: AnalyseWhereInput
    /**
     * Limit how many Analyses to update.
     */
    limit?: number
  }

  /**
   * Analyse upsert
   */
  export type AnalyseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyse
     */
    select?: AnalyseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyse
     */
    omit?: AnalyseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyseInclude<ExtArgs> | null
    /**
     * The filter to search for the Analyse to update in case it exists.
     */
    where: AnalyseWhereUniqueInput
    /**
     * In case the Analyse found by the `where` argument doesn't exist, create a new Analyse with this data.
     */
    create: XOR<AnalyseCreateInput, AnalyseUncheckedCreateInput>
    /**
     * In case the Analyse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyseUpdateInput, AnalyseUncheckedUpdateInput>
  }

  /**
   * Analyse delete
   */
  export type AnalyseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyse
     */
    select?: AnalyseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyse
     */
    omit?: AnalyseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyseInclude<ExtArgs> | null
    /**
     * Filter which Analyse to delete.
     */
    where: AnalyseWhereUniqueInput
  }

  /**
   * Analyse deleteMany
   */
  export type AnalyseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analyses to delete
     */
    where?: AnalyseWhereInput
    /**
     * Limit how many Analyses to delete.
     */
    limit?: number
  }

  /**
   * Analyse.prelevements
   */
  export type Analyse$prelevementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prelevement
     */
    select?: PrelevementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prelevement
     */
    omit?: PrelevementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrelevementInclude<ExtArgs> | null
    where?: PrelevementWhereInput
    orderBy?: PrelevementOrderByWithRelationInput | PrelevementOrderByWithRelationInput[]
    cursor?: PrelevementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrelevementScalarFieldEnum | PrelevementScalarFieldEnum[]
  }

  /**
   * Analyse without action
   */
  export type AnalyseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyse
     */
    select?: AnalyseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyse
     */
    omit?: AnalyseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyseInclude<ExtArgs> | null
  }


  /**
   * Model Prelevement
   */

  export type AggregatePrelevement = {
    _count: PrelevementCountAggregateOutputType | null
    _avg: PrelevementAvgAggregateOutputType | null
    _sum: PrelevementSumAggregateOutputType | null
    _min: PrelevementMinAggregateOutputType | null
    _max: PrelevementMaxAggregateOutputType | null
  }

  export type PrelevementAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    technicienId: number | null
    analyseId: number | null
  }

  export type PrelevementSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    technicienId: number | null
    analyseId: number | null
  }

  export type PrelevementMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    technicienId: number | null
    analyseId: number | null
    datePrelevement: Date | null
    dateResultat: Date | null
    statut: $Enums.Statut | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PrelevementMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    technicienId: number | null
    analyseId: number | null
    datePrelevement: Date | null
    dateResultat: Date | null
    statut: $Enums.Statut | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PrelevementCountAggregateOutputType = {
    id: number
    patientId: number
    technicienId: number
    analyseId: number
    datePrelevement: number
    dateResultat: number
    statut: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PrelevementAvgAggregateInputType = {
    id?: true
    patientId?: true
    technicienId?: true
    analyseId?: true
  }

  export type PrelevementSumAggregateInputType = {
    id?: true
    patientId?: true
    technicienId?: true
    analyseId?: true
  }

  export type PrelevementMinAggregateInputType = {
    id?: true
    patientId?: true
    technicienId?: true
    analyseId?: true
    datePrelevement?: true
    dateResultat?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PrelevementMaxAggregateInputType = {
    id?: true
    patientId?: true
    technicienId?: true
    analyseId?: true
    datePrelevement?: true
    dateResultat?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PrelevementCountAggregateInputType = {
    id?: true
    patientId?: true
    technicienId?: true
    analyseId?: true
    datePrelevement?: true
    dateResultat?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PrelevementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prelevement to aggregate.
     */
    where?: PrelevementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prelevements to fetch.
     */
    orderBy?: PrelevementOrderByWithRelationInput | PrelevementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrelevementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prelevements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prelevements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prelevements
    **/
    _count?: true | PrelevementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrelevementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrelevementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrelevementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrelevementMaxAggregateInputType
  }

  export type GetPrelevementAggregateType<T extends PrelevementAggregateArgs> = {
        [P in keyof T & keyof AggregatePrelevement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrelevement[P]>
      : GetScalarType<T[P], AggregatePrelevement[P]>
  }




  export type PrelevementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrelevementWhereInput
    orderBy?: PrelevementOrderByWithAggregationInput | PrelevementOrderByWithAggregationInput[]
    by: PrelevementScalarFieldEnum[] | PrelevementScalarFieldEnum
    having?: PrelevementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrelevementCountAggregateInputType | true
    _avg?: PrelevementAvgAggregateInputType
    _sum?: PrelevementSumAggregateInputType
    _min?: PrelevementMinAggregateInputType
    _max?: PrelevementMaxAggregateInputType
  }

  export type PrelevementGroupByOutputType = {
    id: number
    patientId: number
    technicienId: number
    analyseId: number
    datePrelevement: Date
    dateResultat: Date | null
    statut: $Enums.Statut
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: PrelevementCountAggregateOutputType | null
    _avg: PrelevementAvgAggregateOutputType | null
    _sum: PrelevementSumAggregateOutputType | null
    _min: PrelevementMinAggregateOutputType | null
    _max: PrelevementMaxAggregateOutputType | null
  }

  type GetPrelevementGroupByPayload<T extends PrelevementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrelevementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrelevementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrelevementGroupByOutputType[P]>
            : GetScalarType<T[P], PrelevementGroupByOutputType[P]>
        }
      >
    >


  export type PrelevementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    technicienId?: boolean
    analyseId?: boolean
    datePrelevement?: boolean
    dateResultat?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    technicien?: boolean | TechnicienDefaultArgs<ExtArgs>
    analyse?: boolean | AnalyseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prelevement"]>

  export type PrelevementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    technicienId?: boolean
    analyseId?: boolean
    datePrelevement?: boolean
    dateResultat?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    technicien?: boolean | TechnicienDefaultArgs<ExtArgs>
    analyse?: boolean | AnalyseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prelevement"]>

  export type PrelevementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    technicienId?: boolean
    analyseId?: boolean
    datePrelevement?: boolean
    dateResultat?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    technicien?: boolean | TechnicienDefaultArgs<ExtArgs>
    analyse?: boolean | AnalyseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prelevement"]>

  export type PrelevementSelectScalar = {
    id?: boolean
    patientId?: boolean
    technicienId?: boolean
    analyseId?: boolean
    datePrelevement?: boolean
    dateResultat?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type PrelevementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "technicienId" | "analyseId" | "datePrelevement" | "dateResultat" | "statut" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["prelevement"]>
  export type PrelevementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    technicien?: boolean | TechnicienDefaultArgs<ExtArgs>
    analyse?: boolean | AnalyseDefaultArgs<ExtArgs>
  }
  export type PrelevementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    technicien?: boolean | TechnicienDefaultArgs<ExtArgs>
    analyse?: boolean | AnalyseDefaultArgs<ExtArgs>
  }
  export type PrelevementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    technicien?: boolean | TechnicienDefaultArgs<ExtArgs>
    analyse?: boolean | AnalyseDefaultArgs<ExtArgs>
  }

  export type $PrelevementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prelevement"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      technicien: Prisma.$TechnicienPayload<ExtArgs>
      analyse: Prisma.$AnalysePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      technicienId: number
      analyseId: number
      datePrelevement: Date
      dateResultat: Date | null
      statut: $Enums.Statut
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["prelevement"]>
    composites: {}
  }

  type PrelevementGetPayload<S extends boolean | null | undefined | PrelevementDefaultArgs> = $Result.GetResult<Prisma.$PrelevementPayload, S>

  type PrelevementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrelevementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrelevementCountAggregateInputType | true
    }

  export interface PrelevementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prelevement'], meta: { name: 'Prelevement' } }
    /**
     * Find zero or one Prelevement that matches the filter.
     * @param {PrelevementFindUniqueArgs} args - Arguments to find a Prelevement
     * @example
     * // Get one Prelevement
     * const prelevement = await prisma.prelevement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrelevementFindUniqueArgs>(args: SelectSubset<T, PrelevementFindUniqueArgs<ExtArgs>>): Prisma__PrelevementClient<$Result.GetResult<Prisma.$PrelevementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prelevement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrelevementFindUniqueOrThrowArgs} args - Arguments to find a Prelevement
     * @example
     * // Get one Prelevement
     * const prelevement = await prisma.prelevement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrelevementFindUniqueOrThrowArgs>(args: SelectSubset<T, PrelevementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrelevementClient<$Result.GetResult<Prisma.$PrelevementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prelevement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrelevementFindFirstArgs} args - Arguments to find a Prelevement
     * @example
     * // Get one Prelevement
     * const prelevement = await prisma.prelevement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrelevementFindFirstArgs>(args?: SelectSubset<T, PrelevementFindFirstArgs<ExtArgs>>): Prisma__PrelevementClient<$Result.GetResult<Prisma.$PrelevementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prelevement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrelevementFindFirstOrThrowArgs} args - Arguments to find a Prelevement
     * @example
     * // Get one Prelevement
     * const prelevement = await prisma.prelevement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrelevementFindFirstOrThrowArgs>(args?: SelectSubset<T, PrelevementFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrelevementClient<$Result.GetResult<Prisma.$PrelevementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prelevements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrelevementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prelevements
     * const prelevements = await prisma.prelevement.findMany()
     * 
     * // Get first 10 Prelevements
     * const prelevements = await prisma.prelevement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prelevementWithIdOnly = await prisma.prelevement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrelevementFindManyArgs>(args?: SelectSubset<T, PrelevementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrelevementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prelevement.
     * @param {PrelevementCreateArgs} args - Arguments to create a Prelevement.
     * @example
     * // Create one Prelevement
     * const Prelevement = await prisma.prelevement.create({
     *   data: {
     *     // ... data to create a Prelevement
     *   }
     * })
     * 
     */
    create<T extends PrelevementCreateArgs>(args: SelectSubset<T, PrelevementCreateArgs<ExtArgs>>): Prisma__PrelevementClient<$Result.GetResult<Prisma.$PrelevementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prelevements.
     * @param {PrelevementCreateManyArgs} args - Arguments to create many Prelevements.
     * @example
     * // Create many Prelevements
     * const prelevement = await prisma.prelevement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrelevementCreateManyArgs>(args?: SelectSubset<T, PrelevementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prelevements and returns the data saved in the database.
     * @param {PrelevementCreateManyAndReturnArgs} args - Arguments to create many Prelevements.
     * @example
     * // Create many Prelevements
     * const prelevement = await prisma.prelevement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prelevements and only return the `id`
     * const prelevementWithIdOnly = await prisma.prelevement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrelevementCreateManyAndReturnArgs>(args?: SelectSubset<T, PrelevementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrelevementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prelevement.
     * @param {PrelevementDeleteArgs} args - Arguments to delete one Prelevement.
     * @example
     * // Delete one Prelevement
     * const Prelevement = await prisma.prelevement.delete({
     *   where: {
     *     // ... filter to delete one Prelevement
     *   }
     * })
     * 
     */
    delete<T extends PrelevementDeleteArgs>(args: SelectSubset<T, PrelevementDeleteArgs<ExtArgs>>): Prisma__PrelevementClient<$Result.GetResult<Prisma.$PrelevementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prelevement.
     * @param {PrelevementUpdateArgs} args - Arguments to update one Prelevement.
     * @example
     * // Update one Prelevement
     * const prelevement = await prisma.prelevement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrelevementUpdateArgs>(args: SelectSubset<T, PrelevementUpdateArgs<ExtArgs>>): Prisma__PrelevementClient<$Result.GetResult<Prisma.$PrelevementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prelevements.
     * @param {PrelevementDeleteManyArgs} args - Arguments to filter Prelevements to delete.
     * @example
     * // Delete a few Prelevements
     * const { count } = await prisma.prelevement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrelevementDeleteManyArgs>(args?: SelectSubset<T, PrelevementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prelevements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrelevementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prelevements
     * const prelevement = await prisma.prelevement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrelevementUpdateManyArgs>(args: SelectSubset<T, PrelevementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prelevements and returns the data updated in the database.
     * @param {PrelevementUpdateManyAndReturnArgs} args - Arguments to update many Prelevements.
     * @example
     * // Update many Prelevements
     * const prelevement = await prisma.prelevement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prelevements and only return the `id`
     * const prelevementWithIdOnly = await prisma.prelevement.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrelevementUpdateManyAndReturnArgs>(args: SelectSubset<T, PrelevementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrelevementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prelevement.
     * @param {PrelevementUpsertArgs} args - Arguments to update or create a Prelevement.
     * @example
     * // Update or create a Prelevement
     * const prelevement = await prisma.prelevement.upsert({
     *   create: {
     *     // ... data to create a Prelevement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prelevement we want to update
     *   }
     * })
     */
    upsert<T extends PrelevementUpsertArgs>(args: SelectSubset<T, PrelevementUpsertArgs<ExtArgs>>): Prisma__PrelevementClient<$Result.GetResult<Prisma.$PrelevementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prelevements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrelevementCountArgs} args - Arguments to filter Prelevements to count.
     * @example
     * // Count the number of Prelevements
     * const count = await prisma.prelevement.count({
     *   where: {
     *     // ... the filter for the Prelevements we want to count
     *   }
     * })
    **/
    count<T extends PrelevementCountArgs>(
      args?: Subset<T, PrelevementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrelevementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prelevement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrelevementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrelevementAggregateArgs>(args: Subset<T, PrelevementAggregateArgs>): Prisma.PrismaPromise<GetPrelevementAggregateType<T>>

    /**
     * Group by Prelevement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrelevementGroupByArgs} args - Group by arguments.
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
      T extends PrelevementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrelevementGroupByArgs['orderBy'] }
        : { orderBy?: PrelevementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrelevementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrelevementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prelevement model
   */
  readonly fields: PrelevementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prelevement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrelevementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    technicien<T extends TechnicienDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TechnicienDefaultArgs<ExtArgs>>): Prisma__TechnicienClient<$Result.GetResult<Prisma.$TechnicienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    analyse<T extends AnalyseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnalyseDefaultArgs<ExtArgs>>): Prisma__AnalyseClient<$Result.GetResult<Prisma.$AnalysePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Prelevement model
   */
  interface PrelevementFieldRefs {
    readonly id: FieldRef<"Prelevement", 'Int'>
    readonly patientId: FieldRef<"Prelevement", 'Int'>
    readonly technicienId: FieldRef<"Prelevement", 'Int'>
    readonly analyseId: FieldRef<"Prelevement", 'Int'>
    readonly datePrelevement: FieldRef<"Prelevement", 'DateTime'>
    readonly dateResultat: FieldRef<"Prelevement", 'DateTime'>
    readonly statut: FieldRef<"Prelevement", 'Statut'>
    readonly createdAt: FieldRef<"Prelevement", 'DateTime'>
    readonly updatedAt: FieldRef<"Prelevement", 'DateTime'>
    readonly deletedAt: FieldRef<"Prelevement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prelevement findUnique
   */
  export type PrelevementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prelevement
     */
    select?: PrelevementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prelevement
     */
    omit?: PrelevementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrelevementInclude<ExtArgs> | null
    /**
     * Filter, which Prelevement to fetch.
     */
    where: PrelevementWhereUniqueInput
  }

  /**
   * Prelevement findUniqueOrThrow
   */
  export type PrelevementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prelevement
     */
    select?: PrelevementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prelevement
     */
    omit?: PrelevementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrelevementInclude<ExtArgs> | null
    /**
     * Filter, which Prelevement to fetch.
     */
    where: PrelevementWhereUniqueInput
  }

  /**
   * Prelevement findFirst
   */
  export type PrelevementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prelevement
     */
    select?: PrelevementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prelevement
     */
    omit?: PrelevementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrelevementInclude<ExtArgs> | null
    /**
     * Filter, which Prelevement to fetch.
     */
    where?: PrelevementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prelevements to fetch.
     */
    orderBy?: PrelevementOrderByWithRelationInput | PrelevementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prelevements.
     */
    cursor?: PrelevementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prelevements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prelevements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prelevements.
     */
    distinct?: PrelevementScalarFieldEnum | PrelevementScalarFieldEnum[]
  }

  /**
   * Prelevement findFirstOrThrow
   */
  export type PrelevementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prelevement
     */
    select?: PrelevementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prelevement
     */
    omit?: PrelevementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrelevementInclude<ExtArgs> | null
    /**
     * Filter, which Prelevement to fetch.
     */
    where?: PrelevementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prelevements to fetch.
     */
    orderBy?: PrelevementOrderByWithRelationInput | PrelevementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prelevements.
     */
    cursor?: PrelevementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prelevements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prelevements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prelevements.
     */
    distinct?: PrelevementScalarFieldEnum | PrelevementScalarFieldEnum[]
  }

  /**
   * Prelevement findMany
   */
  export type PrelevementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prelevement
     */
    select?: PrelevementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prelevement
     */
    omit?: PrelevementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrelevementInclude<ExtArgs> | null
    /**
     * Filter, which Prelevements to fetch.
     */
    where?: PrelevementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prelevements to fetch.
     */
    orderBy?: PrelevementOrderByWithRelationInput | PrelevementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prelevements.
     */
    cursor?: PrelevementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prelevements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prelevements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prelevements.
     */
    distinct?: PrelevementScalarFieldEnum | PrelevementScalarFieldEnum[]
  }

  /**
   * Prelevement create
   */
  export type PrelevementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prelevement
     */
    select?: PrelevementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prelevement
     */
    omit?: PrelevementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrelevementInclude<ExtArgs> | null
    /**
     * The data needed to create a Prelevement.
     */
    data: XOR<PrelevementCreateInput, PrelevementUncheckedCreateInput>
  }

  /**
   * Prelevement createMany
   */
  export type PrelevementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prelevements.
     */
    data: PrelevementCreateManyInput | PrelevementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prelevement createManyAndReturn
   */
  export type PrelevementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prelevement
     */
    select?: PrelevementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prelevement
     */
    omit?: PrelevementOmit<ExtArgs> | null
    /**
     * The data used to create many Prelevements.
     */
    data: PrelevementCreateManyInput | PrelevementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrelevementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prelevement update
   */
  export type PrelevementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prelevement
     */
    select?: PrelevementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prelevement
     */
    omit?: PrelevementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrelevementInclude<ExtArgs> | null
    /**
     * The data needed to update a Prelevement.
     */
    data: XOR<PrelevementUpdateInput, PrelevementUncheckedUpdateInput>
    /**
     * Choose, which Prelevement to update.
     */
    where: PrelevementWhereUniqueInput
  }

  /**
   * Prelevement updateMany
   */
  export type PrelevementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prelevements.
     */
    data: XOR<PrelevementUpdateManyMutationInput, PrelevementUncheckedUpdateManyInput>
    /**
     * Filter which Prelevements to update
     */
    where?: PrelevementWhereInput
    /**
     * Limit how many Prelevements to update.
     */
    limit?: number
  }

  /**
   * Prelevement updateManyAndReturn
   */
  export type PrelevementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prelevement
     */
    select?: PrelevementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prelevement
     */
    omit?: PrelevementOmit<ExtArgs> | null
    /**
     * The data used to update Prelevements.
     */
    data: XOR<PrelevementUpdateManyMutationInput, PrelevementUncheckedUpdateManyInput>
    /**
     * Filter which Prelevements to update
     */
    where?: PrelevementWhereInput
    /**
     * Limit how many Prelevements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrelevementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prelevement upsert
   */
  export type PrelevementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prelevement
     */
    select?: PrelevementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prelevement
     */
    omit?: PrelevementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrelevementInclude<ExtArgs> | null
    /**
     * The filter to search for the Prelevement to update in case it exists.
     */
    where: PrelevementWhereUniqueInput
    /**
     * In case the Prelevement found by the `where` argument doesn't exist, create a new Prelevement with this data.
     */
    create: XOR<PrelevementCreateInput, PrelevementUncheckedCreateInput>
    /**
     * In case the Prelevement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrelevementUpdateInput, PrelevementUncheckedUpdateInput>
  }

  /**
   * Prelevement delete
   */
  export type PrelevementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prelevement
     */
    select?: PrelevementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prelevement
     */
    omit?: PrelevementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrelevementInclude<ExtArgs> | null
    /**
     * Filter which Prelevement to delete.
     */
    where: PrelevementWhereUniqueInput
  }

  /**
   * Prelevement deleteMany
   */
  export type PrelevementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prelevements to delete
     */
    where?: PrelevementWhereInput
    /**
     * Limit how many Prelevements to delete.
     */
    limit?: number
  }

  /**
   * Prelevement without action
   */
  export type PrelevementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prelevement
     */
    select?: PrelevementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prelevement
     */
    omit?: PrelevementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrelevementInclude<ExtArgs> | null
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


  export const TechnicienScalarFieldEnum: {
    id: 'id',
    prenom: 'prenom',
    nom: 'nom',
    email: 'email',
    telephone: 'telephone',
    qualification: 'qualification',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type TechnicienScalarFieldEnum = (typeof TechnicienScalarFieldEnum)[keyof typeof TechnicienScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    prenom: 'prenom',
    nom: 'nom',
    dateNaissance: 'dateNaissance',
    telephone: 'telephone',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const AnalyseScalarFieldEnum: {
    id: 'id',
    code: 'code',
    libelle: 'libelle',
    prix: 'prix',
    delaiResultat: 'delaiResultat',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type AnalyseScalarFieldEnum = (typeof AnalyseScalarFieldEnum)[keyof typeof AnalyseScalarFieldEnum]


  export const PrelevementScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    technicienId: 'technicienId',
    analyseId: 'analyseId',
    datePrelevement: 'datePrelevement',
    dateResultat: 'dateResultat',
    statut: 'statut',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PrelevementScalarFieldEnum = (typeof PrelevementScalarFieldEnum)[keyof typeof PrelevementScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Statut'
   */
  export type EnumStatutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Statut'>
    


  /**
   * Reference to a field of type 'Statut[]'
   */
  export type ListEnumStatutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Statut[]'>
    
  /**
   * Deep Input Types
   */


  export type TechnicienWhereInput = {
    AND?: TechnicienWhereInput | TechnicienWhereInput[]
    OR?: TechnicienWhereInput[]
    NOT?: TechnicienWhereInput | TechnicienWhereInput[]
    id?: IntFilter<"Technicien"> | number
    prenom?: StringFilter<"Technicien"> | string
    nom?: StringFilter<"Technicien"> | string
    email?: StringFilter<"Technicien"> | string
    telephone?: StringNullableFilter<"Technicien"> | string | null
    qualification?: StringFilter<"Technicien"> | string
    createdAt?: DateTimeFilter<"Technicien"> | Date | string
    updatedAt?: DateTimeFilter<"Technicien"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Technicien"> | Date | string | null
    prelevements?: PrelevementListRelationFilter
  }

  export type TechnicienOrderByWithRelationInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    telephone?: SortOrderInput | SortOrder
    qualification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    prelevements?: PrelevementOrderByRelationAggregateInput
  }

  export type TechnicienWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: TechnicienWhereInput | TechnicienWhereInput[]
    OR?: TechnicienWhereInput[]
    NOT?: TechnicienWhereInput | TechnicienWhereInput[]
    prenom?: StringFilter<"Technicien"> | string
    nom?: StringFilter<"Technicien"> | string
    telephone?: StringNullableFilter<"Technicien"> | string | null
    qualification?: StringFilter<"Technicien"> | string
    createdAt?: DateTimeFilter<"Technicien"> | Date | string
    updatedAt?: DateTimeFilter<"Technicien"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Technicien"> | Date | string | null
    prelevements?: PrelevementListRelationFilter
  }, "id" | "email">

  export type TechnicienOrderByWithAggregationInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    telephone?: SortOrderInput | SortOrder
    qualification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TechnicienCountOrderByAggregateInput
    _avg?: TechnicienAvgOrderByAggregateInput
    _max?: TechnicienMaxOrderByAggregateInput
    _min?: TechnicienMinOrderByAggregateInput
    _sum?: TechnicienSumOrderByAggregateInput
  }

  export type TechnicienScalarWhereWithAggregatesInput = {
    AND?: TechnicienScalarWhereWithAggregatesInput | TechnicienScalarWhereWithAggregatesInput[]
    OR?: TechnicienScalarWhereWithAggregatesInput[]
    NOT?: TechnicienScalarWhereWithAggregatesInput | TechnicienScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Technicien"> | number
    prenom?: StringWithAggregatesFilter<"Technicien"> | string
    nom?: StringWithAggregatesFilter<"Technicien"> | string
    email?: StringWithAggregatesFilter<"Technicien"> | string
    telephone?: StringNullableWithAggregatesFilter<"Technicien"> | string | null
    qualification?: StringWithAggregatesFilter<"Technicien"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Technicien"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Technicien"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Technicien"> | Date | string | null
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: IntFilter<"Patient"> | number
    prenom?: StringFilter<"Patient"> | string
    nom?: StringFilter<"Patient"> | string
    dateNaissance?: DateTimeFilter<"Patient"> | Date | string
    telephone?: StringNullableFilter<"Patient"> | string | null
    email?: StringFilter<"Patient"> | string
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
    prelevements?: PrelevementListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    dateNaissance?: SortOrder
    telephone?: SortOrderInput | SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    prelevements?: PrelevementOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    prenom?: StringFilter<"Patient"> | string
    nom?: StringFilter<"Patient"> | string
    dateNaissance?: DateTimeFilter<"Patient"> | Date | string
    telephone?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
    prelevements?: PrelevementListRelationFilter
  }, "id" | "email">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    dateNaissance?: SortOrder
    telephone?: SortOrderInput | SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PatientCountOrderByAggregateInput
    _avg?: PatientAvgOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
    _sum?: PatientSumOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Patient"> | number
    prenom?: StringWithAggregatesFilter<"Patient"> | string
    nom?: StringWithAggregatesFilter<"Patient"> | string
    dateNaissance?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    telephone?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    email?: StringWithAggregatesFilter<"Patient"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
  }

  export type AnalyseWhereInput = {
    AND?: AnalyseWhereInput | AnalyseWhereInput[]
    OR?: AnalyseWhereInput[]
    NOT?: AnalyseWhereInput | AnalyseWhereInput[]
    id?: IntFilter<"Analyse"> | number
    code?: StringFilter<"Analyse"> | string
    libelle?: StringFilter<"Analyse"> | string
    prix?: FloatFilter<"Analyse"> | number
    delaiResultat?: IntFilter<"Analyse"> | number
    createdAt?: DateTimeFilter<"Analyse"> | Date | string
    updatedAt?: DateTimeFilter<"Analyse"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Analyse"> | Date | string | null
    prelevements?: PrelevementListRelationFilter
  }

  export type AnalyseOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    libelle?: SortOrder
    prix?: SortOrder
    delaiResultat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    prelevements?: PrelevementOrderByRelationAggregateInput
  }

  export type AnalyseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: AnalyseWhereInput | AnalyseWhereInput[]
    OR?: AnalyseWhereInput[]
    NOT?: AnalyseWhereInput | AnalyseWhereInput[]
    libelle?: StringFilter<"Analyse"> | string
    prix?: FloatFilter<"Analyse"> | number
    delaiResultat?: IntFilter<"Analyse"> | number
    createdAt?: DateTimeFilter<"Analyse"> | Date | string
    updatedAt?: DateTimeFilter<"Analyse"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Analyse"> | Date | string | null
    prelevements?: PrelevementListRelationFilter
  }, "id" | "code">

  export type AnalyseOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    libelle?: SortOrder
    prix?: SortOrder
    delaiResultat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AnalyseCountOrderByAggregateInput
    _avg?: AnalyseAvgOrderByAggregateInput
    _max?: AnalyseMaxOrderByAggregateInput
    _min?: AnalyseMinOrderByAggregateInput
    _sum?: AnalyseSumOrderByAggregateInput
  }

  export type AnalyseScalarWhereWithAggregatesInput = {
    AND?: AnalyseScalarWhereWithAggregatesInput | AnalyseScalarWhereWithAggregatesInput[]
    OR?: AnalyseScalarWhereWithAggregatesInput[]
    NOT?: AnalyseScalarWhereWithAggregatesInput | AnalyseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Analyse"> | number
    code?: StringWithAggregatesFilter<"Analyse"> | string
    libelle?: StringWithAggregatesFilter<"Analyse"> | string
    prix?: FloatWithAggregatesFilter<"Analyse"> | number
    delaiResultat?: IntWithAggregatesFilter<"Analyse"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Analyse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Analyse"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Analyse"> | Date | string | null
  }

  export type PrelevementWhereInput = {
    AND?: PrelevementWhereInput | PrelevementWhereInput[]
    OR?: PrelevementWhereInput[]
    NOT?: PrelevementWhereInput | PrelevementWhereInput[]
    id?: IntFilter<"Prelevement"> | number
    patientId?: IntFilter<"Prelevement"> | number
    technicienId?: IntFilter<"Prelevement"> | number
    analyseId?: IntFilter<"Prelevement"> | number
    datePrelevement?: DateTimeFilter<"Prelevement"> | Date | string
    dateResultat?: DateTimeNullableFilter<"Prelevement"> | Date | string | null
    statut?: EnumStatutFilter<"Prelevement"> | $Enums.Statut
    createdAt?: DateTimeFilter<"Prelevement"> | Date | string
    updatedAt?: DateTimeFilter<"Prelevement"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Prelevement"> | Date | string | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    technicien?: XOR<TechnicienScalarRelationFilter, TechnicienWhereInput>
    analyse?: XOR<AnalyseScalarRelationFilter, AnalyseWhereInput>
  }

  export type PrelevementOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    technicienId?: SortOrder
    analyseId?: SortOrder
    datePrelevement?: SortOrder
    dateResultat?: SortOrderInput | SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    patient?: PatientOrderByWithRelationInput
    technicien?: TechnicienOrderByWithRelationInput
    analyse?: AnalyseOrderByWithRelationInput
  }

  export type PrelevementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrelevementWhereInput | PrelevementWhereInput[]
    OR?: PrelevementWhereInput[]
    NOT?: PrelevementWhereInput | PrelevementWhereInput[]
    patientId?: IntFilter<"Prelevement"> | number
    technicienId?: IntFilter<"Prelevement"> | number
    analyseId?: IntFilter<"Prelevement"> | number
    datePrelevement?: DateTimeFilter<"Prelevement"> | Date | string
    dateResultat?: DateTimeNullableFilter<"Prelevement"> | Date | string | null
    statut?: EnumStatutFilter<"Prelevement"> | $Enums.Statut
    createdAt?: DateTimeFilter<"Prelevement"> | Date | string
    updatedAt?: DateTimeFilter<"Prelevement"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Prelevement"> | Date | string | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    technicien?: XOR<TechnicienScalarRelationFilter, TechnicienWhereInput>
    analyse?: XOR<AnalyseScalarRelationFilter, AnalyseWhereInput>
  }, "id">

  export type PrelevementOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    technicienId?: SortOrder
    analyseId?: SortOrder
    datePrelevement?: SortOrder
    dateResultat?: SortOrderInput | SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PrelevementCountOrderByAggregateInput
    _avg?: PrelevementAvgOrderByAggregateInput
    _max?: PrelevementMaxOrderByAggregateInput
    _min?: PrelevementMinOrderByAggregateInput
    _sum?: PrelevementSumOrderByAggregateInput
  }

  export type PrelevementScalarWhereWithAggregatesInput = {
    AND?: PrelevementScalarWhereWithAggregatesInput | PrelevementScalarWhereWithAggregatesInput[]
    OR?: PrelevementScalarWhereWithAggregatesInput[]
    NOT?: PrelevementScalarWhereWithAggregatesInput | PrelevementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prelevement"> | number
    patientId?: IntWithAggregatesFilter<"Prelevement"> | number
    technicienId?: IntWithAggregatesFilter<"Prelevement"> | number
    analyseId?: IntWithAggregatesFilter<"Prelevement"> | number
    datePrelevement?: DateTimeWithAggregatesFilter<"Prelevement"> | Date | string
    dateResultat?: DateTimeNullableWithAggregatesFilter<"Prelevement"> | Date | string | null
    statut?: EnumStatutWithAggregatesFilter<"Prelevement"> | $Enums.Statut
    createdAt?: DateTimeWithAggregatesFilter<"Prelevement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Prelevement"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Prelevement"> | Date | string | null
  }

  export type TechnicienCreateInput = {
    prenom: string
    nom: string
    email: string
    telephone?: string | null
    qualification: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    prelevements?: PrelevementCreateNestedManyWithoutTechnicienInput
  }

  export type TechnicienUncheckedCreateInput = {
    id?: number
    prenom: string
    nom: string
    email: string
    telephone?: string | null
    qualification: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    prelevements?: PrelevementUncheckedCreateNestedManyWithoutTechnicienInput
  }

  export type TechnicienUpdateInput = {
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prelevements?: PrelevementUpdateManyWithoutTechnicienNestedInput
  }

  export type TechnicienUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prelevements?: PrelevementUncheckedUpdateManyWithoutTechnicienNestedInput
  }

  export type TechnicienCreateManyInput = {
    id?: number
    prenom: string
    nom: string
    email: string
    telephone?: string | null
    qualification: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TechnicienUpdateManyMutationInput = {
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TechnicienUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientCreateInput = {
    prenom: string
    nom: string
    dateNaissance: Date | string
    telephone?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    prelevements?: PrelevementCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: number
    prenom: string
    nom: string
    dateNaissance: Date | string
    telephone?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    prelevements?: PrelevementUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prelevements?: PrelevementUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prelevements?: PrelevementUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: number
    prenom: string
    nom: string
    dateNaissance: Date | string
    telephone?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PatientUpdateManyMutationInput = {
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnalyseCreateInput = {
    code: string
    libelle: string
    prix: number
    delaiResultat: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    prelevements?: PrelevementCreateNestedManyWithoutAnalyseInput
  }

  export type AnalyseUncheckedCreateInput = {
    id?: number
    code: string
    libelle: string
    prix: number
    delaiResultat: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    prelevements?: PrelevementUncheckedCreateNestedManyWithoutAnalyseInput
  }

  export type AnalyseUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    delaiResultat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prelevements?: PrelevementUpdateManyWithoutAnalyseNestedInput
  }

  export type AnalyseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    delaiResultat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prelevements?: PrelevementUncheckedUpdateManyWithoutAnalyseNestedInput
  }

  export type AnalyseCreateManyInput = {
    id?: number
    code: string
    libelle: string
    prix: number
    delaiResultat: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AnalyseUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    delaiResultat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnalyseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    delaiResultat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrelevementCreateInput = {
    datePrelevement: Date | string
    dateResultat?: Date | string | null
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    patient: PatientCreateNestedOneWithoutPrelevementsInput
    technicien: TechnicienCreateNestedOneWithoutPrelevementsInput
    analyse: AnalyseCreateNestedOneWithoutPrelevementsInput
  }

  export type PrelevementUncheckedCreateInput = {
    id?: number
    patientId: number
    technicienId: number
    analyseId: number
    datePrelevement: Date | string
    dateResultat?: Date | string | null
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PrelevementUpdateInput = {
    datePrelevement?: DateTimeFieldUpdateOperationsInput | Date | string
    dateResultat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: PatientUpdateOneRequiredWithoutPrelevementsNestedInput
    technicien?: TechnicienUpdateOneRequiredWithoutPrelevementsNestedInput
    analyse?: AnalyseUpdateOneRequiredWithoutPrelevementsNestedInput
  }

  export type PrelevementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    technicienId?: IntFieldUpdateOperationsInput | number
    analyseId?: IntFieldUpdateOperationsInput | number
    datePrelevement?: DateTimeFieldUpdateOperationsInput | Date | string
    dateResultat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrelevementCreateManyInput = {
    id?: number
    patientId: number
    technicienId: number
    analyseId: number
    datePrelevement: Date | string
    dateResultat?: Date | string | null
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PrelevementUpdateManyMutationInput = {
    datePrelevement?: DateTimeFieldUpdateOperationsInput | Date | string
    dateResultat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrelevementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    technicienId?: IntFieldUpdateOperationsInput | number
    analyseId?: IntFieldUpdateOperationsInput | number
    datePrelevement?: DateTimeFieldUpdateOperationsInput | Date | string
    dateResultat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type PrelevementListRelationFilter = {
    every?: PrelevementWhereInput
    some?: PrelevementWhereInput
    none?: PrelevementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PrelevementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TechnicienCountOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    qualification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TechnicienAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TechnicienMaxOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    qualification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TechnicienMinOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    qualification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TechnicienSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    dateNaissance?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PatientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    dateNaissance?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    dateNaissance?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PatientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AnalyseCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    libelle?: SortOrder
    prix?: SortOrder
    delaiResultat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AnalyseAvgOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
    delaiResultat?: SortOrder
  }

  export type AnalyseMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    libelle?: SortOrder
    prix?: SortOrder
    delaiResultat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AnalyseMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    libelle?: SortOrder
    prix?: SortOrder
    delaiResultat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AnalyseSumOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
    delaiResultat?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutFilter<$PrismaModel> | $Enums.Statut
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type TechnicienScalarRelationFilter = {
    is?: TechnicienWhereInput
    isNot?: TechnicienWhereInput
  }

  export type AnalyseScalarRelationFilter = {
    is?: AnalyseWhereInput
    isNot?: AnalyseWhereInput
  }

  export type PrelevementCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    technicienId?: SortOrder
    analyseId?: SortOrder
    datePrelevement?: SortOrder
    dateResultat?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PrelevementAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    technicienId?: SortOrder
    analyseId?: SortOrder
  }

  export type PrelevementMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    technicienId?: SortOrder
    analyseId?: SortOrder
    datePrelevement?: SortOrder
    dateResultat?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PrelevementMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    technicienId?: SortOrder
    analyseId?: SortOrder
    datePrelevement?: SortOrder
    dateResultat?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PrelevementSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    technicienId?: SortOrder
    analyseId?: SortOrder
  }

  export type EnumStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutWithAggregatesFilter<$PrismaModel> | $Enums.Statut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutFilter<$PrismaModel>
    _max?: NestedEnumStatutFilter<$PrismaModel>
  }

  export type PrelevementCreateNestedManyWithoutTechnicienInput = {
    create?: XOR<PrelevementCreateWithoutTechnicienInput, PrelevementUncheckedCreateWithoutTechnicienInput> | PrelevementCreateWithoutTechnicienInput[] | PrelevementUncheckedCreateWithoutTechnicienInput[]
    connectOrCreate?: PrelevementCreateOrConnectWithoutTechnicienInput | PrelevementCreateOrConnectWithoutTechnicienInput[]
    createMany?: PrelevementCreateManyTechnicienInputEnvelope
    connect?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
  }

  export type PrelevementUncheckedCreateNestedManyWithoutTechnicienInput = {
    create?: XOR<PrelevementCreateWithoutTechnicienInput, PrelevementUncheckedCreateWithoutTechnicienInput> | PrelevementCreateWithoutTechnicienInput[] | PrelevementUncheckedCreateWithoutTechnicienInput[]
    connectOrCreate?: PrelevementCreateOrConnectWithoutTechnicienInput | PrelevementCreateOrConnectWithoutTechnicienInput[]
    createMany?: PrelevementCreateManyTechnicienInputEnvelope
    connect?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PrelevementUpdateManyWithoutTechnicienNestedInput = {
    create?: XOR<PrelevementCreateWithoutTechnicienInput, PrelevementUncheckedCreateWithoutTechnicienInput> | PrelevementCreateWithoutTechnicienInput[] | PrelevementUncheckedCreateWithoutTechnicienInput[]
    connectOrCreate?: PrelevementCreateOrConnectWithoutTechnicienInput | PrelevementCreateOrConnectWithoutTechnicienInput[]
    upsert?: PrelevementUpsertWithWhereUniqueWithoutTechnicienInput | PrelevementUpsertWithWhereUniqueWithoutTechnicienInput[]
    createMany?: PrelevementCreateManyTechnicienInputEnvelope
    set?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    disconnect?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    delete?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    connect?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    update?: PrelevementUpdateWithWhereUniqueWithoutTechnicienInput | PrelevementUpdateWithWhereUniqueWithoutTechnicienInput[]
    updateMany?: PrelevementUpdateManyWithWhereWithoutTechnicienInput | PrelevementUpdateManyWithWhereWithoutTechnicienInput[]
    deleteMany?: PrelevementScalarWhereInput | PrelevementScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PrelevementUncheckedUpdateManyWithoutTechnicienNestedInput = {
    create?: XOR<PrelevementCreateWithoutTechnicienInput, PrelevementUncheckedCreateWithoutTechnicienInput> | PrelevementCreateWithoutTechnicienInput[] | PrelevementUncheckedCreateWithoutTechnicienInput[]
    connectOrCreate?: PrelevementCreateOrConnectWithoutTechnicienInput | PrelevementCreateOrConnectWithoutTechnicienInput[]
    upsert?: PrelevementUpsertWithWhereUniqueWithoutTechnicienInput | PrelevementUpsertWithWhereUniqueWithoutTechnicienInput[]
    createMany?: PrelevementCreateManyTechnicienInputEnvelope
    set?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    disconnect?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    delete?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    connect?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    update?: PrelevementUpdateWithWhereUniqueWithoutTechnicienInput | PrelevementUpdateWithWhereUniqueWithoutTechnicienInput[]
    updateMany?: PrelevementUpdateManyWithWhereWithoutTechnicienInput | PrelevementUpdateManyWithWhereWithoutTechnicienInput[]
    deleteMany?: PrelevementScalarWhereInput | PrelevementScalarWhereInput[]
  }

  export type PrelevementCreateNestedManyWithoutPatientInput = {
    create?: XOR<PrelevementCreateWithoutPatientInput, PrelevementUncheckedCreateWithoutPatientInput> | PrelevementCreateWithoutPatientInput[] | PrelevementUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrelevementCreateOrConnectWithoutPatientInput | PrelevementCreateOrConnectWithoutPatientInput[]
    createMany?: PrelevementCreateManyPatientInputEnvelope
    connect?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
  }

  export type PrelevementUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PrelevementCreateWithoutPatientInput, PrelevementUncheckedCreateWithoutPatientInput> | PrelevementCreateWithoutPatientInput[] | PrelevementUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrelevementCreateOrConnectWithoutPatientInput | PrelevementCreateOrConnectWithoutPatientInput[]
    createMany?: PrelevementCreateManyPatientInputEnvelope
    connect?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
  }

  export type PrelevementUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PrelevementCreateWithoutPatientInput, PrelevementUncheckedCreateWithoutPatientInput> | PrelevementCreateWithoutPatientInput[] | PrelevementUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrelevementCreateOrConnectWithoutPatientInput | PrelevementCreateOrConnectWithoutPatientInput[]
    upsert?: PrelevementUpsertWithWhereUniqueWithoutPatientInput | PrelevementUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PrelevementCreateManyPatientInputEnvelope
    set?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    disconnect?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    delete?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    connect?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    update?: PrelevementUpdateWithWhereUniqueWithoutPatientInput | PrelevementUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PrelevementUpdateManyWithWhereWithoutPatientInput | PrelevementUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PrelevementScalarWhereInput | PrelevementScalarWhereInput[]
  }

  export type PrelevementUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PrelevementCreateWithoutPatientInput, PrelevementUncheckedCreateWithoutPatientInput> | PrelevementCreateWithoutPatientInput[] | PrelevementUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrelevementCreateOrConnectWithoutPatientInput | PrelevementCreateOrConnectWithoutPatientInput[]
    upsert?: PrelevementUpsertWithWhereUniqueWithoutPatientInput | PrelevementUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PrelevementCreateManyPatientInputEnvelope
    set?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    disconnect?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    delete?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    connect?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    update?: PrelevementUpdateWithWhereUniqueWithoutPatientInput | PrelevementUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PrelevementUpdateManyWithWhereWithoutPatientInput | PrelevementUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PrelevementScalarWhereInput | PrelevementScalarWhereInput[]
  }

  export type PrelevementCreateNestedManyWithoutAnalyseInput = {
    create?: XOR<PrelevementCreateWithoutAnalyseInput, PrelevementUncheckedCreateWithoutAnalyseInput> | PrelevementCreateWithoutAnalyseInput[] | PrelevementUncheckedCreateWithoutAnalyseInput[]
    connectOrCreate?: PrelevementCreateOrConnectWithoutAnalyseInput | PrelevementCreateOrConnectWithoutAnalyseInput[]
    createMany?: PrelevementCreateManyAnalyseInputEnvelope
    connect?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
  }

  export type PrelevementUncheckedCreateNestedManyWithoutAnalyseInput = {
    create?: XOR<PrelevementCreateWithoutAnalyseInput, PrelevementUncheckedCreateWithoutAnalyseInput> | PrelevementCreateWithoutAnalyseInput[] | PrelevementUncheckedCreateWithoutAnalyseInput[]
    connectOrCreate?: PrelevementCreateOrConnectWithoutAnalyseInput | PrelevementCreateOrConnectWithoutAnalyseInput[]
    createMany?: PrelevementCreateManyAnalyseInputEnvelope
    connect?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PrelevementUpdateManyWithoutAnalyseNestedInput = {
    create?: XOR<PrelevementCreateWithoutAnalyseInput, PrelevementUncheckedCreateWithoutAnalyseInput> | PrelevementCreateWithoutAnalyseInput[] | PrelevementUncheckedCreateWithoutAnalyseInput[]
    connectOrCreate?: PrelevementCreateOrConnectWithoutAnalyseInput | PrelevementCreateOrConnectWithoutAnalyseInput[]
    upsert?: PrelevementUpsertWithWhereUniqueWithoutAnalyseInput | PrelevementUpsertWithWhereUniqueWithoutAnalyseInput[]
    createMany?: PrelevementCreateManyAnalyseInputEnvelope
    set?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    disconnect?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    delete?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    connect?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    update?: PrelevementUpdateWithWhereUniqueWithoutAnalyseInput | PrelevementUpdateWithWhereUniqueWithoutAnalyseInput[]
    updateMany?: PrelevementUpdateManyWithWhereWithoutAnalyseInput | PrelevementUpdateManyWithWhereWithoutAnalyseInput[]
    deleteMany?: PrelevementScalarWhereInput | PrelevementScalarWhereInput[]
  }

  export type PrelevementUncheckedUpdateManyWithoutAnalyseNestedInput = {
    create?: XOR<PrelevementCreateWithoutAnalyseInput, PrelevementUncheckedCreateWithoutAnalyseInput> | PrelevementCreateWithoutAnalyseInput[] | PrelevementUncheckedCreateWithoutAnalyseInput[]
    connectOrCreate?: PrelevementCreateOrConnectWithoutAnalyseInput | PrelevementCreateOrConnectWithoutAnalyseInput[]
    upsert?: PrelevementUpsertWithWhereUniqueWithoutAnalyseInput | PrelevementUpsertWithWhereUniqueWithoutAnalyseInput[]
    createMany?: PrelevementCreateManyAnalyseInputEnvelope
    set?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    disconnect?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    delete?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    connect?: PrelevementWhereUniqueInput | PrelevementWhereUniqueInput[]
    update?: PrelevementUpdateWithWhereUniqueWithoutAnalyseInput | PrelevementUpdateWithWhereUniqueWithoutAnalyseInput[]
    updateMany?: PrelevementUpdateManyWithWhereWithoutAnalyseInput | PrelevementUpdateManyWithWhereWithoutAnalyseInput[]
    deleteMany?: PrelevementScalarWhereInput | PrelevementScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutPrelevementsInput = {
    create?: XOR<PatientCreateWithoutPrelevementsInput, PatientUncheckedCreateWithoutPrelevementsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPrelevementsInput
    connect?: PatientWhereUniqueInput
  }

  export type TechnicienCreateNestedOneWithoutPrelevementsInput = {
    create?: XOR<TechnicienCreateWithoutPrelevementsInput, TechnicienUncheckedCreateWithoutPrelevementsInput>
    connectOrCreate?: TechnicienCreateOrConnectWithoutPrelevementsInput
    connect?: TechnicienWhereUniqueInput
  }

  export type AnalyseCreateNestedOneWithoutPrelevementsInput = {
    create?: XOR<AnalyseCreateWithoutPrelevementsInput, AnalyseUncheckedCreateWithoutPrelevementsInput>
    connectOrCreate?: AnalyseCreateOrConnectWithoutPrelevementsInput
    connect?: AnalyseWhereUniqueInput
  }

  export type EnumStatutFieldUpdateOperationsInput = {
    set?: $Enums.Statut
  }

  export type PatientUpdateOneRequiredWithoutPrelevementsNestedInput = {
    create?: XOR<PatientCreateWithoutPrelevementsInput, PatientUncheckedCreateWithoutPrelevementsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPrelevementsInput
    upsert?: PatientUpsertWithoutPrelevementsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutPrelevementsInput, PatientUpdateWithoutPrelevementsInput>, PatientUncheckedUpdateWithoutPrelevementsInput>
  }

  export type TechnicienUpdateOneRequiredWithoutPrelevementsNestedInput = {
    create?: XOR<TechnicienCreateWithoutPrelevementsInput, TechnicienUncheckedCreateWithoutPrelevementsInput>
    connectOrCreate?: TechnicienCreateOrConnectWithoutPrelevementsInput
    upsert?: TechnicienUpsertWithoutPrelevementsInput
    connect?: TechnicienWhereUniqueInput
    update?: XOR<XOR<TechnicienUpdateToOneWithWhereWithoutPrelevementsInput, TechnicienUpdateWithoutPrelevementsInput>, TechnicienUncheckedUpdateWithoutPrelevementsInput>
  }

  export type AnalyseUpdateOneRequiredWithoutPrelevementsNestedInput = {
    create?: XOR<AnalyseCreateWithoutPrelevementsInput, AnalyseUncheckedCreateWithoutPrelevementsInput>
    connectOrCreate?: AnalyseCreateOrConnectWithoutPrelevementsInput
    upsert?: AnalyseUpsertWithoutPrelevementsInput
    connect?: AnalyseWhereUniqueInput
    update?: XOR<XOR<AnalyseUpdateToOneWithWhereWithoutPrelevementsInput, AnalyseUpdateWithoutPrelevementsInput>, AnalyseUncheckedUpdateWithoutPrelevementsInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutFilter<$PrismaModel> | $Enums.Statut
  }

  export type NestedEnumStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutWithAggregatesFilter<$PrismaModel> | $Enums.Statut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutFilter<$PrismaModel>
    _max?: NestedEnumStatutFilter<$PrismaModel>
  }

  export type PrelevementCreateWithoutTechnicienInput = {
    datePrelevement: Date | string
    dateResultat?: Date | string | null
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    patient: PatientCreateNestedOneWithoutPrelevementsInput
    analyse: AnalyseCreateNestedOneWithoutPrelevementsInput
  }

  export type PrelevementUncheckedCreateWithoutTechnicienInput = {
    id?: number
    patientId: number
    analyseId: number
    datePrelevement: Date | string
    dateResultat?: Date | string | null
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PrelevementCreateOrConnectWithoutTechnicienInput = {
    where: PrelevementWhereUniqueInput
    create: XOR<PrelevementCreateWithoutTechnicienInput, PrelevementUncheckedCreateWithoutTechnicienInput>
  }

  export type PrelevementCreateManyTechnicienInputEnvelope = {
    data: PrelevementCreateManyTechnicienInput | PrelevementCreateManyTechnicienInput[]
    skipDuplicates?: boolean
  }

  export type PrelevementUpsertWithWhereUniqueWithoutTechnicienInput = {
    where: PrelevementWhereUniqueInput
    update: XOR<PrelevementUpdateWithoutTechnicienInput, PrelevementUncheckedUpdateWithoutTechnicienInput>
    create: XOR<PrelevementCreateWithoutTechnicienInput, PrelevementUncheckedCreateWithoutTechnicienInput>
  }

  export type PrelevementUpdateWithWhereUniqueWithoutTechnicienInput = {
    where: PrelevementWhereUniqueInput
    data: XOR<PrelevementUpdateWithoutTechnicienInput, PrelevementUncheckedUpdateWithoutTechnicienInput>
  }

  export type PrelevementUpdateManyWithWhereWithoutTechnicienInput = {
    where: PrelevementScalarWhereInput
    data: XOR<PrelevementUpdateManyMutationInput, PrelevementUncheckedUpdateManyWithoutTechnicienInput>
  }

  export type PrelevementScalarWhereInput = {
    AND?: PrelevementScalarWhereInput | PrelevementScalarWhereInput[]
    OR?: PrelevementScalarWhereInput[]
    NOT?: PrelevementScalarWhereInput | PrelevementScalarWhereInput[]
    id?: IntFilter<"Prelevement"> | number
    patientId?: IntFilter<"Prelevement"> | number
    technicienId?: IntFilter<"Prelevement"> | number
    analyseId?: IntFilter<"Prelevement"> | number
    datePrelevement?: DateTimeFilter<"Prelevement"> | Date | string
    dateResultat?: DateTimeNullableFilter<"Prelevement"> | Date | string | null
    statut?: EnumStatutFilter<"Prelevement"> | $Enums.Statut
    createdAt?: DateTimeFilter<"Prelevement"> | Date | string
    updatedAt?: DateTimeFilter<"Prelevement"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Prelevement"> | Date | string | null
  }

  export type PrelevementCreateWithoutPatientInput = {
    datePrelevement: Date | string
    dateResultat?: Date | string | null
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    technicien: TechnicienCreateNestedOneWithoutPrelevementsInput
    analyse: AnalyseCreateNestedOneWithoutPrelevementsInput
  }

  export type PrelevementUncheckedCreateWithoutPatientInput = {
    id?: number
    technicienId: number
    analyseId: number
    datePrelevement: Date | string
    dateResultat?: Date | string | null
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PrelevementCreateOrConnectWithoutPatientInput = {
    where: PrelevementWhereUniqueInput
    create: XOR<PrelevementCreateWithoutPatientInput, PrelevementUncheckedCreateWithoutPatientInput>
  }

  export type PrelevementCreateManyPatientInputEnvelope = {
    data: PrelevementCreateManyPatientInput | PrelevementCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type PrelevementUpsertWithWhereUniqueWithoutPatientInput = {
    where: PrelevementWhereUniqueInput
    update: XOR<PrelevementUpdateWithoutPatientInput, PrelevementUncheckedUpdateWithoutPatientInput>
    create: XOR<PrelevementCreateWithoutPatientInput, PrelevementUncheckedCreateWithoutPatientInput>
  }

  export type PrelevementUpdateWithWhereUniqueWithoutPatientInput = {
    where: PrelevementWhereUniqueInput
    data: XOR<PrelevementUpdateWithoutPatientInput, PrelevementUncheckedUpdateWithoutPatientInput>
  }

  export type PrelevementUpdateManyWithWhereWithoutPatientInput = {
    where: PrelevementScalarWhereInput
    data: XOR<PrelevementUpdateManyMutationInput, PrelevementUncheckedUpdateManyWithoutPatientInput>
  }

  export type PrelevementCreateWithoutAnalyseInput = {
    datePrelevement: Date | string
    dateResultat?: Date | string | null
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    patient: PatientCreateNestedOneWithoutPrelevementsInput
    technicien: TechnicienCreateNestedOneWithoutPrelevementsInput
  }

  export type PrelevementUncheckedCreateWithoutAnalyseInput = {
    id?: number
    patientId: number
    technicienId: number
    datePrelevement: Date | string
    dateResultat?: Date | string | null
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PrelevementCreateOrConnectWithoutAnalyseInput = {
    where: PrelevementWhereUniqueInput
    create: XOR<PrelevementCreateWithoutAnalyseInput, PrelevementUncheckedCreateWithoutAnalyseInput>
  }

  export type PrelevementCreateManyAnalyseInputEnvelope = {
    data: PrelevementCreateManyAnalyseInput | PrelevementCreateManyAnalyseInput[]
    skipDuplicates?: boolean
  }

  export type PrelevementUpsertWithWhereUniqueWithoutAnalyseInput = {
    where: PrelevementWhereUniqueInput
    update: XOR<PrelevementUpdateWithoutAnalyseInput, PrelevementUncheckedUpdateWithoutAnalyseInput>
    create: XOR<PrelevementCreateWithoutAnalyseInput, PrelevementUncheckedCreateWithoutAnalyseInput>
  }

  export type PrelevementUpdateWithWhereUniqueWithoutAnalyseInput = {
    where: PrelevementWhereUniqueInput
    data: XOR<PrelevementUpdateWithoutAnalyseInput, PrelevementUncheckedUpdateWithoutAnalyseInput>
  }

  export type PrelevementUpdateManyWithWhereWithoutAnalyseInput = {
    where: PrelevementScalarWhereInput
    data: XOR<PrelevementUpdateManyMutationInput, PrelevementUncheckedUpdateManyWithoutAnalyseInput>
  }

  export type PatientCreateWithoutPrelevementsInput = {
    prenom: string
    nom: string
    dateNaissance: Date | string
    telephone?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PatientUncheckedCreateWithoutPrelevementsInput = {
    id?: number
    prenom: string
    nom: string
    dateNaissance: Date | string
    telephone?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PatientCreateOrConnectWithoutPrelevementsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutPrelevementsInput, PatientUncheckedCreateWithoutPrelevementsInput>
  }

  export type TechnicienCreateWithoutPrelevementsInput = {
    prenom: string
    nom: string
    email: string
    telephone?: string | null
    qualification: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TechnicienUncheckedCreateWithoutPrelevementsInput = {
    id?: number
    prenom: string
    nom: string
    email: string
    telephone?: string | null
    qualification: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TechnicienCreateOrConnectWithoutPrelevementsInput = {
    where: TechnicienWhereUniqueInput
    create: XOR<TechnicienCreateWithoutPrelevementsInput, TechnicienUncheckedCreateWithoutPrelevementsInput>
  }

  export type AnalyseCreateWithoutPrelevementsInput = {
    code: string
    libelle: string
    prix: number
    delaiResultat: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AnalyseUncheckedCreateWithoutPrelevementsInput = {
    id?: number
    code: string
    libelle: string
    prix: number
    delaiResultat: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AnalyseCreateOrConnectWithoutPrelevementsInput = {
    where: AnalyseWhereUniqueInput
    create: XOR<AnalyseCreateWithoutPrelevementsInput, AnalyseUncheckedCreateWithoutPrelevementsInput>
  }

  export type PatientUpsertWithoutPrelevementsInput = {
    update: XOR<PatientUpdateWithoutPrelevementsInput, PatientUncheckedUpdateWithoutPrelevementsInput>
    create: XOR<PatientCreateWithoutPrelevementsInput, PatientUncheckedCreateWithoutPrelevementsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutPrelevementsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutPrelevementsInput, PatientUncheckedUpdateWithoutPrelevementsInput>
  }

  export type PatientUpdateWithoutPrelevementsInput = {
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientUncheckedUpdateWithoutPrelevementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TechnicienUpsertWithoutPrelevementsInput = {
    update: XOR<TechnicienUpdateWithoutPrelevementsInput, TechnicienUncheckedUpdateWithoutPrelevementsInput>
    create: XOR<TechnicienCreateWithoutPrelevementsInput, TechnicienUncheckedCreateWithoutPrelevementsInput>
    where?: TechnicienWhereInput
  }

  export type TechnicienUpdateToOneWithWhereWithoutPrelevementsInput = {
    where?: TechnicienWhereInput
    data: XOR<TechnicienUpdateWithoutPrelevementsInput, TechnicienUncheckedUpdateWithoutPrelevementsInput>
  }

  export type TechnicienUpdateWithoutPrelevementsInput = {
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TechnicienUncheckedUpdateWithoutPrelevementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnalyseUpsertWithoutPrelevementsInput = {
    update: XOR<AnalyseUpdateWithoutPrelevementsInput, AnalyseUncheckedUpdateWithoutPrelevementsInput>
    create: XOR<AnalyseCreateWithoutPrelevementsInput, AnalyseUncheckedCreateWithoutPrelevementsInput>
    where?: AnalyseWhereInput
  }

  export type AnalyseUpdateToOneWithWhereWithoutPrelevementsInput = {
    where?: AnalyseWhereInput
    data: XOR<AnalyseUpdateWithoutPrelevementsInput, AnalyseUncheckedUpdateWithoutPrelevementsInput>
  }

  export type AnalyseUpdateWithoutPrelevementsInput = {
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    delaiResultat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnalyseUncheckedUpdateWithoutPrelevementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    delaiResultat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrelevementCreateManyTechnicienInput = {
    id?: number
    patientId: number
    analyseId: number
    datePrelevement: Date | string
    dateResultat?: Date | string | null
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PrelevementUpdateWithoutTechnicienInput = {
    datePrelevement?: DateTimeFieldUpdateOperationsInput | Date | string
    dateResultat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: PatientUpdateOneRequiredWithoutPrelevementsNestedInput
    analyse?: AnalyseUpdateOneRequiredWithoutPrelevementsNestedInput
  }

  export type PrelevementUncheckedUpdateWithoutTechnicienInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    analyseId?: IntFieldUpdateOperationsInput | number
    datePrelevement?: DateTimeFieldUpdateOperationsInput | Date | string
    dateResultat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrelevementUncheckedUpdateManyWithoutTechnicienInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    analyseId?: IntFieldUpdateOperationsInput | number
    datePrelevement?: DateTimeFieldUpdateOperationsInput | Date | string
    dateResultat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrelevementCreateManyPatientInput = {
    id?: number
    technicienId: number
    analyseId: number
    datePrelevement: Date | string
    dateResultat?: Date | string | null
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PrelevementUpdateWithoutPatientInput = {
    datePrelevement?: DateTimeFieldUpdateOperationsInput | Date | string
    dateResultat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    technicien?: TechnicienUpdateOneRequiredWithoutPrelevementsNestedInput
    analyse?: AnalyseUpdateOneRequiredWithoutPrelevementsNestedInput
  }

  export type PrelevementUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    technicienId?: IntFieldUpdateOperationsInput | number
    analyseId?: IntFieldUpdateOperationsInput | number
    datePrelevement?: DateTimeFieldUpdateOperationsInput | Date | string
    dateResultat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrelevementUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    technicienId?: IntFieldUpdateOperationsInput | number
    analyseId?: IntFieldUpdateOperationsInput | number
    datePrelevement?: DateTimeFieldUpdateOperationsInput | Date | string
    dateResultat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrelevementCreateManyAnalyseInput = {
    id?: number
    patientId: number
    technicienId: number
    datePrelevement: Date | string
    dateResultat?: Date | string | null
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PrelevementUpdateWithoutAnalyseInput = {
    datePrelevement?: DateTimeFieldUpdateOperationsInput | Date | string
    dateResultat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: PatientUpdateOneRequiredWithoutPrelevementsNestedInput
    technicien?: TechnicienUpdateOneRequiredWithoutPrelevementsNestedInput
  }

  export type PrelevementUncheckedUpdateWithoutAnalyseInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    technicienId?: IntFieldUpdateOperationsInput | number
    datePrelevement?: DateTimeFieldUpdateOperationsInput | Date | string
    dateResultat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrelevementUncheckedUpdateManyWithoutAnalyseInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    technicienId?: IntFieldUpdateOperationsInput | number
    datePrelevement?: DateTimeFieldUpdateOperationsInput | Date | string
    dateResultat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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