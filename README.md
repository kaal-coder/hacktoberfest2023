# Checkpointing Deep Learning Models in Keras

This notebook contains how to checkpoint a deep learning model built using Keras and then reinstate the model architecture and trained weights to a new model or resume the training from you left off.

Usage of Checkpoints

- Allow us to use a pre-trained model for inference without having to retrain the model
- Resume the training process from where we left off in case it was interrupted or for fine-tuning the model
- It acts like an autosave for your model in case training is interrupted for any reason.

Steps for saving and loading model and weights using checkpoint

- Create the model
- Specify the path where we want to save the checkpoint files
- Create the callback function to save the model
- Apply the callback function during the training
- Evaluate the model on test data
- Load the pre-trained weights on a new model using load_weights() or restoring the weights from the latest checkpoint