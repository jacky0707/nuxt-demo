<template>
    <div>
        <v-card>
            <v-card-text>
                <v-row justify="space-between" align="center">
                    <v-col class="title">{{name}}</v-col>
                    <v-col cols="auto">no.{{number}}</v-col>
                </v-row>
                <v-row>
                    <v-col class="text--primary">Type: {{classification}}</v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="6">
                        <v-alert color="success">
                            <div class="text-center">Min: {{minWeight}}</div>
                        </v-alert>
                    </v-col>
                    <v-col cols="6">
                        <v-alert color="error">
                            <div class="text-center">Max: {{maxWeight}}</div>
                        </v-alert>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    props:{
        name:String,
        number: String,
        classification: String,
        maxWeight: String,
        minWeight: String
    }
}
</script>