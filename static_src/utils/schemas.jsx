import { normalize, schema } from 'normalizr';

export const user = new schema.Entity('users');
export const blog = new schema.Entity('blogs');
// export const object = new schema.Entity('objects');
export const post = new schema.Entity('posts', {
    author: user,
    blog: blog,
});
export const event = new schema.Entity('events', {
    author: user,
});
