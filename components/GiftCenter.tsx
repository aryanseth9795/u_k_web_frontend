"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Section } from "./shared/Section";
import { SectionHeading } from "./shared/SectionHeading";
import { Button } from "./ui/button";
import { BRAND } from "@/lib/brand";
import { toast } from "react-toastify";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";

export default function GiftCenter() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string | null>(null);

  return (
    <Section id="gifts">
      <SectionHeading
        title="Gift Center"
        subtitle="Birthday to bridal—ready-to-gift hampers and elegant sets."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {BRAND.gifts.map((g) => (
          <Card key={g.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{g.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-[hsl(var(--muted-foreground))]">{g.desc}</p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button
                onClick={() => {
                  toast.info(`Exploring gifts: ${g.name}`);
                }}
              >
                Explore Gifts
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  setSelected(g.name);
                  setOpen(true);
                }}
              >
                Enquire
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Minimal MUI Dialog usage (selective; cohesive styling preserved) */}
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="enquiry-title">
        <DialogTitle id="enquiry-title">Enquire – {selected ?? "Gift"}</DialogTitle>
        <DialogContent dividers>
          <div className="flex flex-col gap-3 py-1">
            <TextField label="Your Name" size="small" />
            <TextField label="Phone / Email" size="small" />
            <TextField label="Message" size="small" multiline minRows={3} />
          </div>
        </DialogContent>
        <DialogActions className="p-3">
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              toast.success("Thanks! We’ll get back to you soon.");
              setOpen(false);
            }}
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </Section>
  );
}
