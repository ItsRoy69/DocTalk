module.exports = (req, res, next) => {
  try {
    const form = Object.values(req.body.formData);
    const invalid = form.includes(null || '') || form.length === 0;

    if (invalid) {
      throw {
        message: 'all fields are required!',
      };
    }

    next();
  }
  catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
