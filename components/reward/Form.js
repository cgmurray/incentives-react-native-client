import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { View } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
} from "react-native-elements";

class Form extends Component {
  renderField(data) {
    const hasError = data.meta.touched && !!data.meta.error;
    data.input.value = data.input.value.toString();
    return (
      <View>
        <FormLabel labelStyle={{ color: "gray", fontSize: 20 }}>
          {data.input.name}
        </FormLabel>
        <FormInput
          containerStyle={{ flexDirection: "row" }}
          inputStyle={{ color: "black", flex: 1 }}
          {...data.input}
          step={data.step}
          required={data.required}
          placeholder={data.placeholder}
          id={`reward_${data.input.name}`}
          multiline={true}
          keyboardType="numeric"
        />
        {hasError && (
          <FormValidationMessage>{data.meta.error}</FormValidationMessage>
        )}
      </View>
    );
  }

  render() {
    const { handleSubmit, mySubmit } = this.props;

    return (
      <View style={{ backgroundColor: "white", paddingBottom: 20 }}>
        <Field
          component={this.renderField}
          name="name"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="description"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="cost"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="programIncentives"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="userRewards"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="incentiveManagingPartner"
          type="text"
          placeholder=""
        />
        <Button
          buttonStyle={styles.button}
          title="SAVE"
          onPress={handleSubmit(mySubmit)}
        />
      </View>
    );
  }
}

const styles = {
  button: {
    flex: 1,
    backgroundColor: "#3faab4",
    borderRadius: 5,
    borderWidth: 0,
    borderColor: "transparent",
    width: 300,
    height: 50,
    margin: 20,
  },
  placeholderStyle: {
    paddingRight: 10,
  },
};

export default reduxForm({
  form: "reward",
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(Form);
