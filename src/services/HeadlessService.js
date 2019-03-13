import UmbracoHeadless from 'umbraco-headless'

const headlessService = new UmbracoHeadless.HeadlessService({
    url: "/api",
    username: "hej@hjaltedaniel.io",
    password: "IsQuiz5443!!",
    imageBaseUrl: "/api"
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