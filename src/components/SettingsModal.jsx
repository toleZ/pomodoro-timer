import {
  Button,
  FormControl,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  useDisclosure,
} from "@chakra-ui/react";
import { VscSettingsGear } from "react-icons/vsc";
import { useState } from "react";

const SettingsModal = ({ setSettings }) => {
  const [formData, setFormData] = useState({ mm: 0, ss: 0 });

  const handleChange = (e) => {
    e.target.value <= 60
      ? setFormData({ ...formData, [e.target.name]: Number(e.target.value) })
      : setFormData({ ...formData, [e.target.name]: 60 });
  };

  const handleSave = () => {
    setSettings({ mm: formData.mm, ss: formData.ss });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton onClick={onOpen} icon={<VscSettingsGear />} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Timer settings</ModalHeader>
          <ModalBody display={"flex"} alignItems="center" gap={2}>
            <FormControl>
              <NumberInput min={0} max={60}>
                <NumberInputField
                  placeholder="Minutes"
                  name="mm"
                  onChange={handleChange}
                />
              </NumberInput>
            </FormControl>

            <FormControl>
              <NumberInput min={0} max={60}>
                <NumberInputField
                  placeholder="Seconds"
                  name="ss"
                  onChange={handleChange}
                />
              </NumberInput>
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent={"center"} gap={2}>
            <Button
              variant={"outline"}
              colorScheme={"green"}
              onClick={() => {
                handleSave();
                onClose();
              }}
            >
              Save
            </Button>
            <Button variant={"outline"} colorScheme={"red"} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SettingsModal;
