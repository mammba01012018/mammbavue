<template>
    <div>
        <h2>Register as Partner</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="partnerName">Partner Name</label>
                <input type="text" v-model="partner.partnerName" v-validate="'required'" name="partnerName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('partnerName') }" />
                <div v-if="submitted && errors.has('partnerName')" class="invalid-feedback">{{ errors.first('partnerName') }}</div>
            </div>
            <div class="form-group">
                <label for="iataNumber">IATA Number</label>
                <input type="text" v-model="partner.iataNumber" v-validate="'required'" name="iataNumber" class="form-control" :class="{ 'is-invalid': submitted && errors.has('iataNumber') }" />
                <div v-if="submitted && errors.has('iataNumber')" class="invalid-feedback">{{ errors.first('iataNumber') }}</div>
            </div>
            <div class="form-group">
                <label for="companyName">Company Name</label>
                <input type="text" v-model="partner.companyName" v-validate="'required'" name="companyName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('companyName') }" />
                <div v-if="submitted && errors.has('companyName')" class="invalid-feedback">{{ errors.first('companyName') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="telNumber">Telephone Number</label>
                <input type="text" v-model="partner.telNumber" v-validate="{ required: true, min: 6 }" name="telNumber" class="form-control" :class="{ 'is-invalid': submitted && errors.has('telNumber') }" />
                <div v-if="submitted && errors.has('telNumber')" class="invalid-feedback">{{ errors.first('telNumber') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="fax">Fax</label>
                <input type="text" v-model="partner.fax" v-validate="{ required: true, min: 6 }" name="fax" class="form-control" :class="{ 'is-invalid': submitted && errors.has('fax') }" />
                <div v-if="submitted && errors.has('fax')" class="invalid-feedback">{{ errors.first('fax') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="numOfStaff">Number of Staff</label>
                <input type="text" v-model="partner.numOfStaff" v-validate="{ required: true, min: 6 }" name="numOfStaff" class="form-control" :class="{ 'is-invalid': submitted && errors.has('numOfStaff') }" />
                <div v-if="submitted && errors.has('numOfStaff')" class="invalid-feedback">{{ errors.first('numOfStaff') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="tinNumber">TIN Number</label>
                <input type="text" v-model="partner.tinNumber" v-validate="{ required: true, min: 6 }" name="tinNumber" class="form-control" :class="{ 'is-invalid': submitted && errors.has('tinNumber') }" />
                <div v-if="submitted && errors.has('tinNumber')" class="invalid-feedback">{{ errors.first('tinNumber') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="agencyType">Agency Type</label>
                <input type="text" v-model="partner.agencyType" v-validate="{ required: true, min: 6 }" name="agencyType" class="form-control" :class="{ 'is-invalid': submitted && errors.has('agencyType') }" />
                <div v-if="submitted && errors.has('agencyType')" class="invalid-feedback">{{ errors.first('agencyType') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="typeOfService">Type Of Service</label>
                <input type="text" v-model="partner.typeOfService" v-validate="{ required: true, min: 6 }" name="typeOfService" class="form-control" :class="{ 'is-invalid': submitted && errors.has('typeOfService') }" />
                <div v-if="submitted && errors.has('typeOfService')" class="invalid-feedback">{{ errors.first('typeOfService') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="contactPersonName">Contact Person Name</label>
                <input type="text" v-model="partner.contactPersonName" v-validate="{ required: true, min: 6 }" name="contactPersonName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('contactPersonName') }" />
                <div v-if="submitted && errors.has('contactPersonName')" class="invalid-feedback">{{ errors.first('contactPersonName') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="contactPersonPosition">Contact Person Position</label>
                <input type="text" v-model="partner.contactPersonPosition" v-validate="{ required: true, min: 6 }" name="contactPersonPosition" class="form-control" :class="{ 'is-invalid': submitted && errors.has('contactPersonPosition') }" />
                <div v-if="submitted && errors.has('contactPersonPosition')" class="invalid-feedback">{{ errors.first('contactPersonPosition') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="contactPersonTelNum">Contact Person Telephone Number</label>
                <input type="text" v-model="partner.contactPersonTelNum" v-validate="{ required: true, min: 6 }" name="contactPersonTelNum" class="form-control" :class="{ 'is-invalid': submitted && errors.has('contactPersonTelNum') }" />
                <div v-if="submitted && errors.has('contactPersonTelNum')" class="invalid-feedback">{{ errors.first('contactPersonTelNum') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="contactPersonMobileNum">Contact Persion Mobile Number</label>
                <input type="text" v-model="partner.contactPersonMobileNum" v-validate="{ required: true, min: 6 }" name="contactPersonMobileNum" class="form-control" :class="{ 'is-invalid': submitted && errors.has('contactPersonMobileNum') }" />
                <div v-if="submitted && errors.has('contactPersonMobileNum')" class="invalid-feedback">{{ errors.first('contactPersonMobileNum') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="businessPermit">Business Permit</label>
                <input type="text" v-model="partner.businessPermit" v-validate="{ required: true, min: 6 }" name="businessPermit" class="form-control" :class="{ 'is-invalid': submitted && errors.has('businessPermit') }" />
                <div v-if="submitted && errors.has('businessPermit')" class="invalid-feedback">{{ errors.first('businessPermit') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="businessPermitExpiry">Business Permit Expiration Date</label>
                <input type="text" v-model="partner.businessPermitExpiry" v-validate="{ required: true, min: 6 }" name="businessPermitExpiry" class="form-control" :class="{ 'is-invalid': submitted && errors.has('businessPermitExpiry') }" />
                <div v-if="submitted && errors.has('businessPermitExpiry')" class="invalid-feedback">{{ errors.first('businessPermitExpiry') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="dti">DTI</label>
                <input type="text" v-model="partner.dti" v-validate="{ required: true, min: 6 }" name="dti" class="form-control" :class="{ 'is-invalid': submitted && errors.has('dti') }" />
                <div v-if="submitted && errors.has('dti')" class="invalid-feedback">{{ errors.first('dti') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="sec">SEC</label>
                <input type="text" v-model="partner.sec" v-validate="{ required: true, min: 6 }" name="sec" class="form-control" :class="{ 'is-invalid': submitted && errors.has('sec') }" />
                <div v-if="submitted && errors.has('sec')" class="invalid-feedback">{{ errors.first('sec') }}</div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" :disabled="status.registering">Register</button>
                <img v-show="status.registering" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                <router-link to="/login" class="btn btn-link">Cancel</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            partner: {
                partnerName: '',
                iataNumber: '',
                companyName: '',
                telNumber: '',
                fax: '',
                numOfStaff: '',
                tinNumber: '',
                agencyType: '',
                typeOfService: '',
                contactPersonName: '',
                contactPersonPosition: '',
                contactPersonTelNum: '',
                contactPersonMobileNum: '',
                businessPermit: '',
                businessPermitExpiry: '',
                dti: '',
                sec: '',
            },
            submitted: false
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    methods: {
        ...mapActions('account', ['register']),
        handleSubmit(e) {
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.register(this.partner);
                }
            });
        }
    }
};
</script>