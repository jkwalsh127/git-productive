const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const codeRoutes = require('./codeRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/codes', codeRoutes);

module.exports = router;
