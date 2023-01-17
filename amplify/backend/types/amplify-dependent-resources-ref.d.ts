export type AmplifyDependentResourcesAttributes = {
    "function": {
        "FlockQuestionsAPI": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "flockmeapi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "questions": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}