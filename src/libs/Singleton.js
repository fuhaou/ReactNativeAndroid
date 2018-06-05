export default class Singleton
{
    static instance = null;

    static getInstance()
    {
        if (!this.instance) {
            this.instance = new this;
        }

        return this.instance;
    }
}