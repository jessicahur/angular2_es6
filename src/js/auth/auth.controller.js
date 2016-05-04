class AuthCtrl {
  constructor(User, $state) {
    'ngInject';

    this._User = User;

    this.title = $state.current.title;
    this.authType = $state.current.name.replace('app.', '');
  }

  submitForm() {
    this.isSubmitting = true;

    this._User.attempAuth(this.authType, this.formData).then(
      (res) => {
        this.isSubmitting = false;
        console.log(res);
      },
      (err) => {
        this.isSubmitting = false;
        console.log(err.data.errors);
      });
  }
}

export default AuthCtrl;
