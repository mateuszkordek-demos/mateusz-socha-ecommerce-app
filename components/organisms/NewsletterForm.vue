<template lang="pug">
    .contact-form
        div(
            v-if="!hideForm"
        )
            p.text-justify Chcesz być zawsze na bieżąco? Zapisz się do mojego newslettera, by dowiedzieć się o występach w Twojej okolicy, wydarzeniach specjalnych lub po prostu co u mnie nowego.
            v-form(
                ref="form"
                v-model="valid"
                lazy-validation
            )
                v-row.pt-5

                    v-col.py-0(
                        cols="12"
                    )

                        v-text-field(
                            v-model="email"
                            :rules="emailRules"
                            label="Adres e-mail"
                            required
                            outlined
                            dense
                            validate-on-blur
                            color="secondary"
                        )

                    v-col.py-0(
                        cols="6"
                    )
                        v-text-field(
                            v-model="name"
                            :rules="textRules"
                            label="Imię"
                            required
                            outlined
                            dense
                            validate-on-blur
                            color="secondary"
                        )

                    v-col.py-0(
                        cols="6"
                    )

                        v-select(
                            v-model="voivoideship"
                            :items="voivoideships"
                            :rules="selectRules"
                            outlined
                            required
                            dense
                            label="Województwo"
                            single-line
                            color="secondary"
                        )

                    v-col.py-0(
                        :cols="tablet ? 12 : 4"
                    )

                        v-btn.font-weight-bold.px-7(
                            :disabled="!valid"
                            color="success"
                            @click="validate"
                            rounded
                            depressed
                            small
                            height="32"
                            style="width: 100%;"
                        ) Zapisz się

        div.d-flex.justify-center.flex-column.align-center(
            v-if="hideForm"
            :style="[tablet ? {'height': '300px'} : {'height': '250px'}]"
        )

            i.fal.fa-envelope-open-text.d-flex.justify-center.pb-6.primary--text(
                style="font-size: 40px;"
            )
            p.text-center Dzięki za zapisanie się do mojego newslettera!
            p.text-center Za chwilę otrzymasz wiadomość z prośbą o potwierdzenie zapisu. <br>Potwierdź subskrypcję klikając w link w mailu.
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
    name: "newsletter-form",

    data() {
        return {
            hideForm: false,
            valid: null,
            name: null,
            voivoideship: null,
            email: null,
            textRules: [
                val => {
                    if (val) return true;
                    else return "Pole jest wymagane";
                }
            ],
            emailRules: [
                val => {
                    if (
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                            val
                        )
                    ) {
                        return true;
                    } else {
                        return "Podaj poprawny adres e-mail";
                    }
                }
            ],
            selectRules: [
                val => {
                    if (val) return true;
                    else return "Wybierz województwo";
                }
            ]
        };
    },

    computed: {
        ...mapState(["voivoideships"]),
        mailText() {
            return `testowa wiadomość`;
        }
    },

    methods: {
        validate() {
            let valid = this.$refs.form.validate();
            if (valid) {
                // console.log(this.mailText);

                axios
                    .post("https://postmanpat.enlighten-webservices.ovh/test", {
                        template: "manual",
                        to: "mateusz.kordek@enlighten.pl",
                        subject: "Nowa subskrypcja newslettera!",
                        html: this.mailText,
                        fromName: this.name,
                        replyTo: this.email
                    })
                    .then(res => {
                        // console.log(res);
                    })
                    .catch(err => {
                        // console.error(err);
                    });

                this.hideForm = true;
            } else {
            }
        }
    }
};
</script>