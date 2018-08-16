import { normalize, schema } from 'normalizr';

export const user = new schema.Entity('users');
export const blog = new schema.Entity('blogs');
export const chat = new schema.Entity('chats', {
    user_1: user,
    user_2: user,
});
export const post = new schema.Entity('posts', {
    author: user,
    blog: blog,
});
export const event = new schema.Entity('events', {
    author: user,
});
export const like = new schema.Entity('events', {
    author: user,
});

