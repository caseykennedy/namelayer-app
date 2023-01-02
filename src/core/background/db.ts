import bdb from 'bdb';
import type DB from 'bdb/lib/db';

let db: typeof DB;

export async function open() {
  if (db) {
    return;
  }

  let tdb = bdb.create('test/db');
  await tdb.open();
  db = tdb;
}

export async function close() {
  ensureDB();
  await db.close();
  db = null;
}

export async function put(key: string, value: any) {
  ensureDB();
  return db.put(
    Buffer.from(key, 'utf-8'),
    Buffer.from(JSON.stringify(value), 'utf-8')
  );
}

export async function get(key: string) {
  ensureDB();
  const data = await db.get(Buffer.from(key, 'utf-8'));
  if (data === null) {
    return null;
  }

  return JSON.parse(data.toString('utf-8'));
}

export async function del(key: string) {
  ensureDB();
  return db.del(Buffer.from(key, 'utf-8'));
}

export async function iteratePrefix(prefix: string, cb: () => void) {
  const gt = Buffer.from(prefix, 'utf-8');
  const iter = db.iterator({
    gt,
    lt: Buffer.concat([gt, Buffer.from([0xff])]),
    values: true,
  });
  await iter.each(cb);
}

// export async function getUserDir() {
//   return app.getPath('userData');
// }

function ensureDB() {
  if (!db) {
    throw new Error('db not open');
  }
}

export async function start() {
  await open();
}
