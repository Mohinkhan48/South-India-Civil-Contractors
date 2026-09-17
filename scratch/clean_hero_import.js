import fs from 'fs';

const filePath = 'src/components/Hero.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  "import React, { useRef, useEffect, useState } from 'react';",
  "import React, { useRef, useEffect } from 'react';"
);

fs.writeFileSync(filePath, content);
console.log("Cleaned up unused import in Hero.tsx!");
