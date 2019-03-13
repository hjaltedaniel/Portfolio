import UmbracoHeadless from 'umbraco-headless'

const headlessService = new UmbracoHeadless.HeadlessService({
    url: "https://hjaltes-impartial-elephant.s1.umbraco.io",
    username: "hej@hjaltedaniel.io",
    password: "IsQuiz5443!!",
    imageBaseUrl: "https://hjaltes-impartial-elephant.s1.umbraco.io"
})

export default {
    async GetRoot() {
        return await headlessService.getById(1085);
    },
    async GetProjects() {
        let root = await headlessService.getById(1089);
        return await headlessService.getChildren(root);
    }
}