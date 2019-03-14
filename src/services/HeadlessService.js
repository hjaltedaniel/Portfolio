import UmbracoHeadless from 'umbraco-headless'

const headlessService = new UmbracoHeadless.HeadlessService({
    url: window.location.href,
    username: "hej@hjaltedaniel.io",
    password: "IsQuiz5443!!",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
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