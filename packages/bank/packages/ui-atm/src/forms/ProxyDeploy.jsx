/* --- Global --- */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { hooks } from "@ethers-react/system";
import { useTransactionToast } from "@ethers-react/ui-blueprint";

/* --- ProxyDeploy : Component --- */
export const ProxyDeploy = ({ address, contractName, ...props }) => {
  /* --- Hooks : State --- */
  const contractTransaction = hooks.useContractSendTransaction(address);
  const toast = useTransactionToast(contractTransaction);

  /* --- Local : State --- */
  const { handleSubmit, register, errors } = useForm();

  /* --- Actions : Form  --- */
  // Submit : Action : Form
  const onSubmit = async values => {
    contractTransaction.sendTransaction({
      contractName,
      func: "createProxy",
      inputs: [values.address, values.data],
      params: {}
    });
    toast.reset();
  };

  /* --- Error : Effect --- */
  useEffect(() => {
    if (Number(process.env.REACT_APP_ETHERS_SYSTEM_DEBUG) === 1) {
      console.log(contractTransaction, "contractTransaction");
    }
  }, [contractTransaction]);

  /* --- ProxyDeploy : Form : Compoent --- */
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Molecule.Field
        name="address"
        placeholder="Address"
        defaultValue={props.valueAddress}
        register={register}
        errors={errors}
        sx={props.sxField}
      />

      <Molecule.Field
        name="data"
        placeholder="Data"
        defaultValue={props.valueData}
        register={register}
        errors={errors}
        sx={props.sxField}
      />

      <Atom.Button
        md
        rounded
        disabled={!contractTransaction.isContractConnected}
        sx={props.sxButton}
      >
        {props.label}
      </Atom.Button>
    </form>
  );
};

ProxyDeploy.defaultProps = {
  label: "Deploy Proxy Contract",
  sxField: {},
  sxButton: {
    mt: 2,
    width: "100%"
  }
};
