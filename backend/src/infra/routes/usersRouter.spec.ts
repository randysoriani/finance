class UsersRouter{
    route(httpRequest){
        if(!httpRequest.body){
            return {
                statusCode: 400,
                body: { message: 'Bad requisition' }
            }
        }
    }
}

describe('User router', () => {
    it('should return 400 if no email is provided', () => {
        const request = {
            email: 'any@mail.com'
        }
        const httpResponse = new UsersRouter().route(request);
        expect(httpResponse?.statusCode).toBe(400);
    })
})