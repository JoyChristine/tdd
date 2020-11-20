import caesar from './cipher';

it('cipher', () => {
    expect(caesar('javascript', 3))
        .toEqual('gxsxpzofmq')
})